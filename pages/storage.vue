<template>
  <BaseContainerSecondaryColumn>
    <h3 class="text-lg leading-6 font-medium text-gray-900">Storage</h3>
    <p v-if="$fetchState.pending">Fetching storage...</p>
    <div v-else-if="$fetchState.error">
      <div class="bg-yellow-50 mt-4 border-l-4 border-yellow-400 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <!-- Heroicon name: solid/exclamation -->
            <svg
              class="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-yellow-700">
              {{ $fetchState.error.message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="
          grid
          mt-4
          grid-cols-1
          gap-4
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-1
          xl:grid-cols-2
          2xl:grid-cols-3
        "
      >
        <ItemCard
          v-for="item in inventory"
          :key="item.ent_id"
          :title="item.ent_name"
          :subtitle="item.description"
          :qrValue="item.ent_id"
          :isPinned="
            pinnedItems.findIndex(
              (x) => x.id == item.ent_id && x.type == 'storage'
            ) != -1
          "
          :isSelected="item.ent_id == currentItem.ent_id"
          @pinItem="pinItem(item)"
          @onClick="changeCurrentItem(item)"
        />
      </div>
    </div>

    <template #aside>
      <StorageDetailsAside :storageItem="currentItem" />
    </template>
  </BaseContainerSecondaryColumn>
</template>

<script>
export default {
  fetchOnServer: false,
  data() {
    return {
      inventory: [],
      currentItem: {},
      pinnedItems: [],
    };
  },
  async fetch() {
    this.inventory = await fetch(
      `${this.$config.baseURL}/api/entities/storage`
    ).then((res) => res.json());
    if (this.inventory.error) {
      throw new Error(this.inventory.error);
    }
    if (this.inventory.length > 0) this.currentItem = this.inventory[0];
    this.pinnedItems = (await this.$localForage.getItem("pinnedItems")) || [];
  },
  methods: {
    async pinItem(item) {
      const pinItem = {
        title: item.ent_name,
        subtitle: item.description,
        type: "storage",
        id: item.ent_id,
      };

      // check if item exists in local storage
      let storageObj = (await this.$localForage.getItem("pinnedItems")) || [];

      if (
        !storageObj ||
        storageObj.findIndex((x) => x.id == pinItem.id) === -1
      ) {
        storageObj.push(pinItem);
      } else {
        storageObj = storageObj.filter((x) => x.id != pinItem.id);
      }
      // write updated items
      await this.$localForage.setItem("pinnedItems", storageObj);
      this.pinnedItems = (await this.$localForage.getItem("pinnedItems")) || [];
    },
    changeCurrentItem(item) {
      this.currentItem = item;
      console.log(this.currentItem);
    },
  },
};
</script>

<style>
</style>