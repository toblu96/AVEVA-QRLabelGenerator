<template>
  <div class="relative">
    <div
      :class="
        isSelected
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
        h-full
        items-center
        space-x-10
        hover:border-gray-400
      "
    >
      <div class="flex-shrink-0">
        <div class="p-4 rounded-xl shadow-lg bg-gray-200">
          <vue-qrcode
            :value="qrValue || 'Darth Vader'"
            background="transparent"
            render-as="svg"
          />
        </div>
      </div>
      <div class="flex-1 min-w-0">
        <button class="focus:outline-none w-full" @click="$emit('onClick')">
          <span class="absolute inset-0" aria-hidden="true"></span>
          <p class="text-sm text-left font-medium text-gray-900 truncate">
            {{ title || "title" }}
          </p>
          <p class="text-sm text-left text-gray-500 truncate">
            {{ subtitle || "subtitle" }}
          </p>
          <div class="mt-2 flex items-center space-x-2">
            <svg
              class="h-5 w-5 text-gray-500"
              x-description="Heroicon name: solid/collection"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>

            <span class="text-sm text-gray-500 truncate">{{
              storageLocation
            }}</span>
          </div>
        </button>
      </div>
    </div>
    <div class="absolute top-3 right-3">
      <button
        @click="$emit('pinItem')"
        type="button"
        :class="
          isPinned
            ? 'text-red-400 hover:bg-red-100 hover:text-red-500'
            : 'text-gray-400 hover:bg-gray-100 hover:text-gray-500'
        "
        class="
          bg-white
          rounded-full
          h-8
          w-8
          flex
          items-center
          justify-center
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500
        "
      >
        <svg
          class="h-5 w-5"
          x-description="Heroicon name: solid/pencil"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Pin item</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    storageLocation: {
      type: String,
      default: "Imperial shuttle"
    },
    qrValue: {
      type: null
    },
    isPinned: {
      type: Boolean
    },
    isSelected: {
      type: Boolean
    }
  }
};
</script>

<style></style>
