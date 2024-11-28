<template>
 <FadedScrollableDiv
    class="flex flex-col gap-4 overflow-y-auto w-full px-8"
    :class="[isLastSection ? '' : 'max-h-full']"
  >
    <!-- Iterate through sections -->
    <template v-for="section in _fields" :key="section.label">
      <!-- If section has a label, wrap fields in Section component -->
      <Section
        v-if="section.label"
        :is-opened="false"
        :label="section.label"
      >
         <div
        class="grid gap-4 border-b border-gray-200 pb-4"
        :class="
          section.columns
            ? 'grid-cols-' + section.columns
            : 'grid-cols-2 sm:grid-cols-3'
        "
      >
          <div
            v-for="field in section.fields"
            :key="field.label"
            :class="[field.hidden && 'hidden']"
            class="section-field flex flex-col gap-2"
          >
            <Tooltip :text="__(field.label)" :hoverDelay="1">
              <div class="text-sm text-gray-900 p-2">
                <span>{{ __(field.label) }}</span>
                <span class="text-red-500">{{ field.reqd ? ' *' : '' }}</span>
              </div>
            </Tooltip>
            <div class="min-h-[28px] items-center overflow-hidden text-base gap-4">
              <!-- Read-only field -->
              <div
                v-if="field.read_only && field.type !== 'checkbox'"
                class="flex h-7 cursor-pointer items-center px-2 py-1 text-gray-600"
              >
                <Tooltip :text="__(field.tooltip)">
                  <div>{{ data[field.name] }}</div>
                </Tooltip>
              </div>

              <!-- Checkbox Field -->
              <FormControl
                v-else-if="field.type === 'checkbox'"
                class="form-control"
                :type="field.type"
                v-model="data[field.name]"
                @change.stop="emit('update', field.name, $event.target.checked)"
                :disabled="Boolean(field.read_only)"
              />

              <!-- Other Input Fields -->
              <FormControl
                v-else-if="['email', 'number', 'date', 'password', 'textarea'].includes(field.type)"
                class="form-control"
                :type="field.type"
                :value="data[field.name]"
                :placeholder="field.placeholder"
                :debounce="500"
                @change.stop="emit('update', field.name, $event.target.value)"
              />

              <!-- Select Field -->
              <FormControl
                v-else-if="field.type === 'select'"
                class="form-control cursor-pointer"
                type="select"
                v-model="data[field.name]"
                :options="field.options"
                :placeholder="field.placeholder"
                @change.stop="emit('update', field.name, $event.target.value)"
              />

              <!-- Link Field -->
              <Link
                v-else-if="field.type === 'link'"
                class="form-control select-text"
                :value="data[field.name]"
                :doctype="field.doctype"
                :filters="field.filters"
                :placeholder="field.placeholder"
                @change="(data) => emit('update', field.name, data)"
                :onCreate="field.create"
              />
              <Table
                v-else-if="field.fieldtype === 'Table'"
                :label="field.label"
                :rows="fieldValue[field.fieldname]"
                :columns="field.options"
              />
              <!-- Default Text Field -->
              <FormControl
                v-else
                class="form-control"
                type="text"
                :value="data[field.name]"
                :placeholder="field.placeholder"
                :debounce="500"
                @change.stop="emit('update', field.name, $event.target.value)"
              />
            </div>

            <!-- Link Icon -->
            <ArrowUpRightIcon
              v-if="field.type === 'link' && field.link && data[field.name]"
              class="h-4 w-4 shrink-0 cursor-pointer text-gray-600 hover:text-gray-800"
              @click="field.link(data[field.name])"
            />
          </div>
        </div>
      </Section>
      <!-- If no label, display fields directly -->
      <template v-else>
         <div
        class="grid gap-4 border-b border-gray-200 pb-4"
        :class="
          section.columns
            ? 'grid-cols-' + section.columns
            : 'grid-cols-2 sm:grid-cols-3'
        "
      >
          <div
            v-for="field in section.fields"
            :key="field.label"
            :class="[field.hidden && 'hidden']"
            class="section-field flex flex-col gap-2"
          >
            <Tooltip :text="__(field.label)" :hoverDelay="1">
              <div class="text-sm text-gray-900 p-2">
                <span>{{ __(field.label) }}</span>
                <span class="text-red-500">{{ field.reqd ? ' *' : '' }}</span>
              </div>
            </Tooltip>
            <div class="min-h-[28px] items-center overflow-hidden text-base gap-4">
              <!-- Repeat the same field logic -->
              <div
                v-if="field.read_only && field.type !== 'checkbox'"
                class="flex h-7 cursor-pointer items-center px-2 py-1 text-gray-600"
              >
                <Tooltip :text="__(field.tooltip)">
                  <div>{{ data[field.name] }}</div>
                </Tooltip>
              </div>
              <FormControl
                v-else-if="field.type === 'checkbox'"
                class="form-control"
                :type="field.type"
                v-model="data[field.name]"
                @change.stop="emit('update', field.name, $event.target.checked)"
                :disabled="Boolean(field.read_only)"
              />
              <FormControl
                v-else-if="['email', 'number', 'date', 'password', 'textarea'].includes(field.type)"
                class="form-control"
                :type="field.type"
                :value="data[field.name]"
                :placeholder="field.placeholder"
                :debounce="500"
                @change.stop="emit('update', field.name, $event.target.value)"
              />
              <FormControl
                v-else-if="field.type === 'select'"
                class="form-control cursor-pointer"
                type="select"
                v-model="data[field.name]"
                :options="field.options"
                :placeholder="field.placeholder"
                @change.stop="emit('update', field.name, $event.target.value)"
              />
              <Link
                v-else-if="field.type === 'link'"
                class="form-control select-text"
                :value="data[field.name]"
                :doctype="field.doctype"
                :filters="field.filters"
                :placeholder="field.placeholder"
                @change="(data) => emit('update', field.name, data)"
                :onCreate="field.create"
              />
              <Table
                v-else-if="field.fieldtype === 'Table'"
                :label="field.label"
                :rows="fieldValue[field.fieldname]"
                :columns="field.options"
              />
              <FormControl
                v-else
                class="form-control"
                type="text"
                :value="data[field.name]"
                :placeholder="field.placeholder"
                :debounce="500"
                @change.stop="emit('update', field.name, $event.target.value)"
              />
            </div>
            <ArrowUpRightIcon
              v-if="field.type === 'link' && field.link && data[field.name]"
              class="h-4 w-4 shrink-0 cursor-pointer text-gray-600 hover:text-gray-800"
              @click="field.link(data[field.name])"
            />
          </div>
        </div>
      </template>
    </template>
  </FadedScrollableDiv>
</template>
<script setup>
import FadedScrollableDiv from '@/components/FadedScrollableDiv.vue'
import Section from '@/components/Section.vue'
import Table from '@/components/CustomComponent/Table.vue'
import ArrowUpRightIcon from '@/components/Icons/ArrowUpRightIcon.vue'
import Link from '@/components/Controls/Link.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import { usersStore } from '@/stores/users'
import { Tooltip } from 'frappe-ui'
import { computed } from 'vue'

const props = defineProps({
  sections: {
    type: Array,
    required: true,
  },
  isLastSection: {
    type: Boolean,
    default: false,
  },
  fieldValue: {
      type: Object,
      required: true,
    },
})

console.log("field value", props.fieldValue['items'])
const { getUser } = usersStore()

const emit = defineEmits(['update'])

const data = defineModel()

const _fields = computed(() => {
  let all_fields = []

  props.sections?.forEach((section) => {
    if (!section.fields || section.fields.length === 0) return;
    let sectionData = {
      ...section, // Include all section data
      label: section.label || "", 
      fields: [] 
    }
    section.fields?.forEach((field) => {
      let df = field?.all_properties
      if (df?.depends_on) evaluate_depends_on(df.depends_on, field)

      sectionData.fields.push({
        ...field,
        filters: df?.link_filters && JSON.parse(df.link_filters),
        placeholder: field.placeholder || field.label,
      })
    })
    if (sectionData.fields.length > 0) {
      all_fields.push(sectionData)
    }
  })

  console.log("all fields with sections", all_fields)
  return all_fields
})


function evaluate_depends_on(expression, field) {
  if (expression.substr(0, 5) == 'eval:') {
    try {
      let out = evaluate(expression.substr(5), { doc: data.value })
      if (!out) {
        field.hidden = true
      }
    } catch (e) {
      console.error(e)
    }
  }
}

function evaluate(code, context = {}) {
  let variable_names = Object.keys(context)
  let variables = Object.values(context)
  code = `let out = ${code}; return out`
  try {
    let expression_function = new Function(...variable_names, code)
    return expression_function(...variables)
  } catch (error) {
    console.log('Error evaluating the following expression:')
    console.error(code)
    throw error
  }
}
</script>

<style scoped>
.form-control {
  margin: 2px;
}

:deep(.form-control button) {
  gap: 0;
}
:deep(.form-control [type='checkbox']) {
  margin-left: 9px;
  cursor: pointer;
}

:deep(.form-control button > div) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:deep(.form-control button svg) {
  color: white;
  width: 0;
}
</style>
