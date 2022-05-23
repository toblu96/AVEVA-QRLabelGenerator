<template>
  <div class="p-4 bg-white border rounded-md">
    <div class="grid relative">
      <div class="flex p-4 space-x-6 justify-center border-b">
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
            {{ title }}
          </span>
        </div>
      </div>
      <div class="absolute m-auto p-10 rounded-xl shadow-lg z-10 bg-white">
        <vue-qrcode :value="qrValue.toString()" render-as="svg" size="300" />
      </div>
      <img class="w-full opacity-50" src="/Checking boxes-cuate.svg" />
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
    qrValue: {
      type: [String, Number],
      default: "Darth Vader",
    },
  },
};
</script>

<style>
</style>