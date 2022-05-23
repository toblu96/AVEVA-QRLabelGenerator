<template>
  <div class="p-4 bg-white border rounded-md">
    <div class="grid relative">
      <div class="flex p-4 space-x-6 justify-center border-b">
        <div class="flex items-center space-x-2">
          <svg
            class="h-5 w-5 text-gray-400"
            x-description="Heroicon name: solid/hashtag"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-sm text-gray-500 font-medium">{{ title }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg
            class="h-5 w-5 text-gray-400"
            x-description="Heroicon name: solid/collection"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="text-sm text-gray-500 font-medium">
            {{ storageLocation }}
          </span>
        </div>
      </div>
      <div class="absolute m-auto p-10 rounded-xl shadow-lg z-10 bg-white">
        <vue-qrcode :value="qrValue.toString()" render-as="svg" size="300" />
      </div>
      <img class="w-full opacity-50" src="/Box.svg" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Darth Vader",
    },
    storageLocation: {
      type: String,
      default: "Hallo Globi",
    },
    qrValue: {
      type: [String, Number],
      default: "Darth Vader",
    },
  },
};
</script>

<style>
</style>