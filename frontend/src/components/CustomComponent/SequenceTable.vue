<template>
    <div class="overflow-x-auto rounded-md">
      <table class="table-fixed border-collapse w-full text-center">
        <thead class="bg-gray-100 rounded-lg text-gray-600 border">
          <tr class="text-center text-sm bg-gray-200">
            <th class="px-6 py-1 w-6 text-center">
              <FormControl
                type="checkbox"
                v-model="selectAll"
                @change="toggleSelectAll"
                class="form-control"
              />
            </th>
            <th class="px-4 py-2 border-r border-gray-400 text-sm text-center w-40">{{ label }}</th>
            <th class="px-4 py-2 border-r border-gray-400 text-sm text-center w-40"> {{ __('Length') }}</th>
            <th class="px-4 py-2 border-r border-gray-400 text-sm text-center w-40">{{ __('Field Type') }}</th>
            <th class="px-4 py-2 text-sm text-center w-6"> {{ __('Edit') }}</th>
          </tr>
        </thead>
        <tbody class="rounded-t-md">
          <tr v-for="(row, index) in rows" :key="index" class="text-sm">
            <td class="px-4 py-1 border border-gray-400">
              <FormControl
                type="checkbox"
                v-model="row.selected"
                class="form-control"
              />
            </td>
            <td class="border border-gray-300 px-2 py-1">
              <Autocomplete
                :value="row.field_name"
                :options="fields.data"
                placeholder="Add field"
                @change="(e) => updateField(index, e)"
              >
                <template #item-label="{ option }">
                  <div class="flex flex-col gap-1">
                    <div>{{ option.label }}</div>
                    <div class="text-gray-500 text-sm">{{ `${option.fieldname} - ${option.fieldtype}` }}</div>
                  </div>
                </template>
              </Autocomplete>
            </td>
            <td class="border border-gray-300 px-2 py-1">
              <FormControl type="number" placeholder="Enter Length" v-model="row.length" />
            </td>
            <td class="border border-gray-300 px-2 py-1">{{ row.field_type }}</td>
            <td class="px-4 py-1 border border-gray-400">
              <Button @click="showEditDialog.value=true" variant="ghost" class="w-7 mr-2">
                <EditIcon class="h-4 w-4" />
              </Button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="flex py-2">
              <button @click="addRow" class="border border-gray-500 text-black px-2 py-1 text-sm rounded-md">Add</button>
              <button v-if="selectedRows.length > 0" @click="deleteSelectedRows" class="border border-red-500 text-red-500 px-2 py-1 text-sm rounded-md ml-4">Delete</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import EditIcon from '@/components/Icons/EditIcon.vue'
  import Autocomplete from '@/components/frappe-ui/Autocomplete.vue'
  
  const props = defineProps({
    label: String,
    rows: Array,
    fields: Object,
    selectAll: Boolean,
    updateField: Function,
    toggleSelectAll: Function,
    addRow: Function,
    deleteSelectedRows: Function
  })
  </script>
  