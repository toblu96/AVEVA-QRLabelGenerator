<template>
  <div>
    <div
      v-if="inventoryItem.item_id"
      class="h-full bg-white p-8 overflow-y-auto"
    >
      <div class="pb-16 space-y-6">
        <div>
          <div class="flex justify-center w-full pb-10 overflow-hidden">
            <div class="p-8 rounded-xl shadow-lg bg-gray-200">
              <vue-qrcode
                :value="inventoryItem.sublot_no"
                render-as="svg"
                background="transparent"
                size="200"
              />
            </div>
          </div>
          <div class="mt-4 flex items-start justify-between">
            <div>
              <h2 class="text-lg font-medium text-gray-900">
                {{ inventoryItem.sublot_no }}
              </h2>
              <p class="text-sm font-medium text-gray-500">
                {{ inventoryItem.item_id }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 class="font-medium text-gray-900">Information</h3>
          <dl
            class="
              mt-2
              border-t border-b border-gray-200
              divide-y divide-gray-200
            "
          >
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Lot Nr.</dt>
              <dd class="text-gray-900">{{ inventoryItem.lot_no }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Sublot Nr.</dt>
              <dd class="text-gray-900">{{ inventoryItem.sublot_no }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Storage Location</dt>
              <dd class="text-gray-900">
                {{ inventoryItem.storageEnt.ent_name }}
              </dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Quantity left</dt>
              <dd class="text-gray-900">{{ inventoryItem.qty_left }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Status</dt>
              <dd class="text-gray-900">{{ inventoryItem.status_cd }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Grade</dt>
              <dd class="text-gray-900">{{ inventoryItem.grade_cd }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Workorder</dt>
              <dd class="text-gray-900">{{ inventoryItem.wo_id }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Last modified</dt>
              <dd class="text-gray-900">{{ inventoryItem.last_edit_at }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Last modified</dt>
              <dd class="text-gray-900">{{ inventoryItem.last_edit_by }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div v-else class="p-8">Please select an item</div>
  </div>
</template>

<script>
export default {
  props: {
    inventoryItem: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
</style>