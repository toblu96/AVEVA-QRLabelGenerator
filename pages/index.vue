<template>
  <BaseContainerSecondaryColumn>
    <template>
      <div v-if="currentItem.id">
        <LabelStorageLocation
          v-show="currentItem.type == 'storage'"
          :title="currentItem.title"
          :qrValue="currentItem.id"
        />
        <LabelBox
          v-show="currentItem.type == 'inventory'"
          :title="currentItem.title"
          :storageLocation="currentItem.storageLocation"
          :qrValue="currentItem.title"
        />
      </div>
      <div v-else class="w-full mt-5">
        <img class="inset-0 m-auto w-2/4" src="/Empty-pana.svg" />
      </div>
    </template>

    <template #aside>
      <div class="flex flex-col py-6 bg-white">
        <div class="px-4 sm:px-6">
          <div class="flex items-start justify-between">
            <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
              Liked Items
            </h2>
          </div>
        </div>
        <div class="mt-6 relative flex-1 px-4 sm:px-6 space-y-4">
          <div>
            <p class="text-bold text-gray-500 truncate">Inventory Items</p>
            <div
              v-if="pinnedInventoryItems.length > 0"
              class="grid mt-5 grid-cols-2 gap-4"
            >
              <div
                v-for="item in pinnedInventoryItems"
                :key="item.id"
                :class="
                  item.title == currentItem.title
                    ? 'ring-2 ring-offset-2 ring-indigo-500'
                    : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                "
                class="
                  relative
                  rounded-lg
                  border border-gray-300
                  bg-white
                  px-6
                  py-5
                  shadow-sm
                  flex
                  items-center
                  space-x-3
                  hover:border-gray-400
                  focus-within:ring-2
                  focus-within:ring-offset-2
                  focus-within:ring-indigo-500
                "
              >
                <div class="flex-1 min-w-0">
                  <button
                    class="focus:outline-none text-left w-full"
                    @click="changeCurrentItem(item)"
                  >
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900 truncate">
                      {{ item.title }}
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                      {{ item.subtitle }}
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="mt-2 rounded-md bg-blue-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: solid/information-circle -->
                    <svg
                      class="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="ml-3 flex-1 md:flex md:justify-between">
                    <p class="text-sm text-blue-700">
                      No inventory items liked.
                    </p>
                    <p class="mt-3 text-sm md:mt-0 md:ml-6">
                      <NuxtLink
                        to="/inventory"
                        class="
                          whitespace-nowrap
                          font-medium
                          text-blue-700
                          hover:text-blue-600
                        "
                        >Inventory
                        <span aria-hidden="true">&rarr;</span></NuxtLink
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="text-bold text-gray-500 truncate">Storage Locations</p>
            <div
              v-if="pinnedStorageItems.length > 0"
              class="grid mt-5 grid-cols-2 gap-4"
            >
              <div
                v-for="item in pinnedStorageItems"
                :key="item.id"
                :class="
                  item.id == currentItem.id
                    ? 'ring-2 ring-offset-2 ring-indigo-500'
                    : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'
                "
                class="
                  relative
                  rounded-lg
                  border border-gray-300
                  bg-white
                  px-6
                  py-5
                  shadow-sm
                  flex
                  items-center
                  space-x-3
                  hover:border-gray-400
                  focus-within:ring-2
                  focus-within:ring-offset-2
                  focus-within:ring-indigo-500
                "
              >
                <div class="flex-1 min-w-0">
                  <button
                    class="focus:outline-none text-left w-full"
                    @click="changeCurrentItem(item)"
                  >
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900 truncate">
                      {{ item.title }}
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                      {{ item.subtitle }}
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="mt-2 rounded-md bg-blue-50 p-4">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: solid/information-circle -->
                    <svg
                      class="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="ml-3 flex-1 md:flex md:justify-between">
                    <p class="text-sm text-blue-700">No storage items liked.</p>
                    <p class="mt-3 text-sm md:mt-0 md:ml-6">
                      <NuxtLink
                        to="/storage"
                        class="
                          whitespace-nowrap
                          font-medium
                          text-blue-700
                          hover:text-blue-600
                        "
                        >Storage
                        <span aria-hidden="true">&rarr;</span></NuxtLink
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BaseContainerSecondaryColumn>
</template>

<script>
export default {
  fetchOnServer: false,
  data() {
    return {
      pinnedInventoryItems: [],
      pinnedStorageItems: [],
      currentItem: {},
    };
  },
  async mounted() {
    const pinnedItems = (await this.$localForage.getItem("pinnedItems")) || [];
    this.pinnedInventoryItems = pinnedItems.filter(
      (x) => x.type == "inventory"
    );
    this.pinnedStorageItems = pinnedItems.filter((x) => x.type == "storage");
  },
  async fetch() {
    // check if storage locations in indexedDB are up to date only for inv items
    let pinnedItems = await this.$localForage.getItem("pinnedItems");
    if (pinnedItems.length <= 0) return;

    let inventory = await fetch(`${this.$config.baseURL}/api/inventory`).then(
      (res) => res.json()
    );
    if (inventory.error) {
      throw new Error(this.inventory.error);
    }

    // update all storage locations of the inventory items
    for (let i of pinnedItems) {
      if (i.type == "storage") break;
      let invItem = inventory.filter((x) => x.sublot_no == i.title);
      i.storageLocation = invItem[0].storageEnt.ent_name;
    }
  },
  methods: {
    changeCurrentItem(item) {
      this.currentItem = item;
    },
  },
};
</script>
