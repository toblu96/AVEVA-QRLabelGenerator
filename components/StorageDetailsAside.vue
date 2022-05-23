<template>
  <div>
    <div v-if="storageItem.ent_id" class="h-full bg-white p-8 overflow-y-auto">
      <div class="pb-16 space-y-6">
        <div>
          <div class="flex justify-center w-full pb-10 overflow-hidden">
            <div class="p-8 rounded-xl shadow-lg bg-gray-200">
              <vue-qrcode
                :value="storageItem.ent_id.toString()"
                render-as="svg"
                background="transparent"
                size="200"
              />
            </div>
          </div>
          <div class="mt-4 flex items-start justify-between">
            <div>
              <h2 class="text-lg font-medium text-gray-900">
                {{ storageItem.ent_name }}
              </h2>
              <p class="text-sm font-medium text-gray-500">
                {{ storageItem.description }}
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
              <dt class="text-gray-500">Entity ID</dt>
              <dd class="text-gray-900">{{ storageItem.ent_id }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Parent entity ID</dt>
              <dd class="text-gray-900">{{ storageItem.parent_ent_id }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Can run jobs</dt>
              <dd class="text-gray-900">{{ storageItem.can_run_jobs }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Can schedule jobs</dt>
              <dd class="text-gray-900">{{ storageItem.can_sched_jobs }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Can store</dt>
              <dd class="text-gray-900">{{ storageItem.can_store }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Can track OEE</dt>
              <dd class="text-gray-900">{{ storageItem.can_track_oee }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Last modified</dt>
              <dd class="text-gray-900">{{ storageItem.last_edit_at }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Last modified</dt>
              <dd class="text-gray-900">{{ storageItem.last_edit_by }}</dd>
            </div>
            <div class="py-3 flex justify-between text-sm font-medium">
              <dt class="text-gray-500">Comment</dt>
              <dd class="text-gray-900">{{ storageItem.last_edit_comment }}</dd>
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
    storageItem: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
</style>