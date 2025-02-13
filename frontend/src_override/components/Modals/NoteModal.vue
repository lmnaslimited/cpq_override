<template>
  <Dialog
    v-model="show"
    :options="{
      size: 'xl',
      actions: [
        {
          label: editMode ? __('Update') : __('Create'),
          variant: 'solid',
          onClick: () => updateNote(),
        },
      ],
    }"
  >
    <template #body-title>
      <div class="flex items-center gap-3">
        <h3 class="text-2xl font-semibold leading-6 text-gray-900">
          {{ editMode ? __('Edit Note') : __('Create Note') }}
        </h3>
        <Button
          v-if="_note?.reference_docname"
          variant="outline"
          size="sm"
          :label="
            _note.reference_doctype == 'CRM Deal'
              ? __('Open Deal')
              : __('Open Lead')
          "
          @click="redirect()"
        >
          <template #suffix>
            <ArrowUpRightIcon class="h-4 w-4" />
          </template>
        </Button>
      </div>
    </template>
    <template #body-content>
      <div class="flex flex-col gap-4">
        <div>
          <div class="mb-1.5 text-sm text-gray-600">{{ __('Title') }}</div>
          <TextInput
            ref="title"
            variant="outline"
            v-model="_note.title"
            :placeholder="__('Call with John Doe')"
          />
        </div>
        <div>
          <div class="mb-1.5 text-sm text-gray-600">{{ __('Content') }}</div>
          <TextEditor
            variant="outline"
            ref="content"
            editor-class="!prose-sm overflow-auto min-h-[180px] max-h-80 py-1.5 px-2 rounded border border-gray-300 bg-white hover:border-gray-400 hover:shadow-sm focus:bg-white focus:border-gray-500 focus:shadow-sm focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-400 text-gray-800 transition-colors"
            :bubbleMenu="true"
            :content="_note.content"
            @change="(val) => (_note.content = val)"
            :placeholder="
              __('Took a call with John Doe and discussed the new project.')
            "
          />
        </div>
        </div>
        <!-- Start of the change for CPQ -->
        <div class="pt-4">
          <CpqFields v-if="(_note.reference_doctype === 'CRM Lead' || (props.doctype == 'CRM Lead' && props.doc != '')) && LD_SECTIONS?.data" :sections="LD_SECTIONS.data" :data="_note" />
        </div>
        <div v-if="LD_CHILD_TABLE && LD_CHILD_TABLE.data?.rows && Object.values(LD_CHILD_TABLE.data.rows).some(arr => arr.length > 0)">
          <div v-for="(values, key) in LD_CHILD_TABLE.data.rows" :key="key">
            <Table
              :rows="values"
              :columns="LD_CHILD_TABLE.data.columns[0].fields"
              :filteredColumns="LD_CHILD_TABLE.data.columns[0].fields"
              :label="key"
              @item-changed=""
              @update-rows="(rows) => updateChildTable(rows, key)"
              :isTabRequired="false"
              @open-tab=""
            />
          </div>
        </div>
        <!-- End of the change for CPQ -->
    </template>
  </Dialog>
</template>

<script setup>
import CpqFields from '@/components/CpqFields.vue'
import Table from '@/components/CustomComponent/Table.vue'
import ArrowUpRightIcon from '@/components/Icons/ArrowUpRightIcon.vue'
import { capture } from '@/telemetry'
import { TextEditor, call, createResource } from 'frappe-ui'
import { ref, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import { createToast } from '@/utils'

const props = defineProps({
  note: {
    type: Object,
    default: {},
  },
  doctype: {
    type: String,
    default: 'CRM Lead',
  },
  doc: {
    type: String,
    default: '',
  },
})

const show = defineModel()
const notes = defineModel('reloadNotes')

const emit = defineEmits(['after'])

const router = useRouter()

const title = ref(null)
const editMode = ref(false)
let _note = ref({})

async function updateNote() {
  // This condition was previously used to prevent unnecessary updates.
  // Before: It checked if the title and content in the UI matched the database,
  //         and if true, skipped the update.
  // After: Since fields are now fetched dynamically from CRM Field Layouts, 
  //        restricting updates to only title and content is no longer feasible.
  //        Therefore, this condition is commented out.

  // if (
  //   props.note.title === _note.value.title &&
  //   props.note.content === _note.value.content
  // )
  //   return

  if (_note.value.name) {
    let d = await call('frappe.client.set_value', {
      doctype: 'FCRM Note',
      name: _note.value.name,
      fieldname: _note.value,
    })
    if (d.name) {
      notes.value?.reload()
      emit('after', d)
    }
  } else {
    //start of change 
    let { creation, modified, modified_by, owner,title, content, ...noteData } = _note.value;
    //end of change
    let d = await call('frappe.client.insert', {
      doc: {
        doctype: 'FCRM Note',
        title: _note.value.title,
        content: _note.value.content,
        reference_doctype: props.doctype,
        reference_docname: props.doc || '',
        ...noteData //changed for CPQ
      },
    })
    if (d.name) {
      capture('note_created')
      notes.value?.reload()
      emit('after', d, true)
    }
  }
  show.value = false
}

function redirect() {
  if (!props.note?.reference_docname) return
  let name = props.note.reference_doctype == 'CRM Deal' ? 'Deal' : 'Lead'
  let params = { leadId: props.note.reference_docname }
  if (name == 'Deal') {
    params = { dealId: props.note.reference_docname }
  }
  router.push({ name: name, params: params })
}

//Start of change
//Function to fetch fields from CRM Field Layout
const LD_SECTIONS = createResource({
  url: 'crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout',
  cache: ['LD_SECTIONS', 'FCRM Note'],
  params: { doctype: 'FCRM Note', type: 'Quick Entry' },
  auto: true,
});

const TABLE_FIELD = LD_SECTIONS?.data?.find(SECTION =>
  SECTION.fields.some(FIELD => FIELD.type === 'Table')
)?.fields.find(FIELD => FIELD.type === 'Table');

const LD_CHILD_TABLE = createResource({
  url: "crm.api.docCpq.fn_get_table_rows_columns",
  
  auto: false
});

function updateChildTable(rows, tableName) {
  createResource({
    url: "crm.api.docCpq.fn_update_child_table_row",
    params: { "doctype": "FCRM Note","docname": props.note.name , "child_field": tableName, "values": rows },
    auto: true,
    onSuccess: (response) => {
      createToast({
        title: __("updated"),
        icon: "check",
        iconClasses: "text-green-600",
      });
    },
    onError: (err) => {
      createToast({
        title: __("Error updating child table"),
        text: __(err.messages?.[0] || "An unexpected error occurred."),
        icon: "x",
        iconClasses: "text-red-600",
      });
    },
  });
}
//End of change

watch(
  () => show.value, 
  (value) => {
    if (!value) return
    editMode.value = false
    nextTick(() => {
      title?.value?.el.focus() //changed for CPQ
      _note.value = { ...props.note }
      if (_note.value.title || _note.value.content) {
        editMode.value = true
      }
    })
    console.log(props.note)
    //start of the change for CPQ
    if (TABLE_FIELD && props.note.custom_generate_lead_question == 1) {
      LD_CHILD_TABLE.fetch({
          doctype: 'FCRM Note',
          docname: props.note.name        
      })
    }else {
      LD_CHILD_TABLE.data = { rows: {} };
    }
    //end of the change for CPQ
  }
)
</script>
