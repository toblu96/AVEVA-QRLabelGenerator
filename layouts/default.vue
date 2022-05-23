<template>
  <div>
    <div class="h-screen bg-gray-50 flex overflow-hidden">
      <!-- Narrow sidebar -->
      <div class="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
        <div class="w-full h-full py-6 flex flex-col items-center">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLogo />
          </div>
          <div class="flex flex-1 flex-col mt-6 w-full px-2">
            <div class="flex-1 flex flex-col space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" -->
              <NuxtLink
                to="/"
                :class="
                  currentPath == '/'
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                "
                class="
                  group
                  w-full
                  p-3
                  rounded-md
                  flex flex-col
                  items-center
                  text-xs
                  font-medium
                "
              >
                <!--
            Heroicon name: outline/qrcode

            Current: "text-white", Default: "text-indigo-300 group-hover:text-white"
          -->
                <svg
                  class="text-indigo-300 group-hover:text-white h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  ></path>
                </svg>
                <span class="mt-2">Labels</span>
              </NuxtLink>

              <NuxtLink
                to="/inventory"
                :class="
                  currentPath == '/inventory'
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                "
                class="
                  group
                  w-full
                  p-3
                  rounded-md
                  flex flex-col
                  items-center
                  text-xs
                  font-medium
                "
              >
                <!-- Heroicon name: outline/cubes -->
                <svg
                  class="text-indigo-300 group-hover:text-white h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  ></path>
                </svg>
                <span class="mt-2">Inventory</span>
              </NuxtLink>

              <NuxtLink
                to="/storage"
                :class="
                  currentPath == '/storage'
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                "
                class="
                  group
                  w-full
                  p-3
                  rounded-md
                  flex flex-col
                  items-center
                  text-xs
                  font-medium
                "
              >
                <!-- Heroicon name: outline/truck -->
                <svg
                  class="text-indigo-300 group-hover:text-white h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  ></path>
                </svg>
                <span class="mt-2">Storage</span>
              </NuxtLink>

              <NuxtLink
                to="/sta"
                :class="
                  currentPath == '/sta'
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                "
                class="
                  group
                  w-full
                  p-3
                  rounded-md
                  flex flex-col
                  items-center
                  text-xs
                  font-medium
                "
              >
                <!-- Heroicon name: outline/truck -->
                <svg
                  class="text-indigo-300 group-hover:text-white h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
                <span class="mt-2">S 2 A</span>
              </NuxtLink>

              <NuxtLink
                to="/items"
                :class="
                  currentPath == '/items'
                    ? 'bg-indigo-800 text-white'
                    : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                "
                class="
                  group
                  w-full
                  p-3
                  rounded-md
                  flex flex-col
                  items-center
                  text-xs
                  font-medium
                "
              >
                <!-- Heroicon name: outline/view-grid -->
                <svg
                  class="text-indigo-300 group-hover:text-white h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span class="mt-2">Items</span>
              </NuxtLink>
            </div>
            <div class="flex-shrink-0 flex">
              <a
                href="https://github.com/toblu96"
                target="_blank"
                class="
                  text-indigo-300
                  hover:text-white
                  transition-colors
                  duration-200
                  w-full
                  flex flex-col
                  items-center
                  text-xs
                  font-medium
                "
                ><span class="sr-only">QRCode Generator on GitHub</span
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
                <span class="mt-2">&copy; toblu96</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
      <div class="md:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 z-40 flex">
          <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
          <div
            class="fixed inset-0 bg-gray-600 bg-opacity-75"
            aria-hidden="true"
          ></div>

          <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
          <div
            class="
              relative
              max-w-xs
              w-full
              bg-indigo-700
              pt-5
              pb-4
              flex-1 flex flex-col
            "
          >
            <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
            <div class="absolute top-1 right-0 -mr-14 p-1">
              <button
                type="button"
                class="
                  h-12
                  w-12
                  rounded-full
                  flex
                  items-center
                  justify-center
                  focus:outline-none
                  focus:ring-2 focus:ring-white
                "
              >
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span class="sr-only">Close sidebar</span>
              </button>
            </div>

            <div class="flex-shrink-0 px-4 flex items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt="Workflow"
              />
            </div>
            <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
              <nav class="h-full flex flex-col">
                <div class="space-y-1">
                  <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-800 hover:text-white" -->
                  <a
                    href="#"
                    class="
                      text-indigo-100
                      hover:bg-indigo-800
                      hover:text-white
                      group
                      py-2
                      px-3
                      rounded-md
                      flex
                      items-center
                      text-sm
                      font-medium
                    "
                  >
                    <!--
                  Heroicon name: outline/home

                  Current: "text-white", Default: "text-indigo-300 group-hover:text-white"
                -->
                    <svg
                      class="
                        text-indigo-300
                        group-hover:text-white
                        mr-3
                        h-6
                        w-6
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span>Browse</span>
                  </a>

                  <a
                    href="#"
                    class="
                      text-indigo-100
                      hover:bg-indigo-800
                      hover:text-white
                      group
                      py-2
                      px-3
                      rounded-md
                      flex
                      items-center
                      text-sm
                      font-medium
                    "
                  >
                    <!-- Heroicon name: outline/view-grid -->
                    <svg
                      class="
                        text-indigo-300
                        group-hover:text-white
                        mr-3
                        h-6
                        w-6
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                    <span>All Items</span>
                  </a>

                  <a
                    href="#"
                    class="
                      bg-indigo-800
                      text-white
                      group
                      py-2
                      px-3
                      rounded-md
                      flex
                      items-center
                      text-sm
                      font-medium
                    "
                    aria-current="page"
                  >
                    <!-- Heroicon name: outline/photograph -->
                    <svg
                      class="text-white mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Photos</span>
                  </a>

                  <a
                    href="#"
                    class="
                      text-indigo-100
                      hover:bg-indigo-800
                      hover:text-white
                      group
                      py-2
                      px-3
                      rounded-md
                      flex
                      items-center
                      text-sm
                      font-medium
                    "
                  >
                    <!-- Heroicon name: outline/user-group -->
                    <svg
                      class="
                        text-indigo-300
                        group-hover:text-white
                        mr-3
                        h-6
                        w-6
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Shared</span>
                  </a>

                  <a
                    href="#"
                    class="
                      text-indigo-100
                      hover:bg-indigo-800
                      hover:text-white
                      group
                      py-2
                      px-3
                      rounded-md
                      flex
                      items-center
                      text-sm
                      font-medium
                    "
                  >
                    <!-- Heroicon name: outline/collection -->
                    <svg
                      class="
                        text-indigo-300
                        group-hover:text-white
                        mr-3
                        h-6
                        w-6
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                    <span>Albums</span>
                  </a>

                  <a
                    href="#"
                    class="
                      text-indigo-100
                      hover:bg-indigo-800
                      hover:text-white
                      group
                      py-2
                      px-3
                      rounded-md
                      flex
                      items-center
                      text-sm
                      font-medium
                    "
                  >
                    <!-- Heroicon name: outline/cog -->
                    <svg
                      class="
                        text-indigo-300
                        group-hover:text-white
                        mr-3
                        h-6
                        w-6
                      "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Settings</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>

      <!-- Content area -->
      <div class="flex-1 flex flex-col overflow-hidden">
        <header class="w-full">
          <div
            class="
              relative
              z-10
              flex-shrink-0
              h-16
              bg-white
              border-b border-gray-200
              shadow-sm
              flex
            "
          >
            <button
              type="button"
              class="
                border-r border-gray-200
                px-4
                text-gray-500
                focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-indigo-500
                md:hidden
              "
            >
              <span class="sr-only">Open sidebar</span>
              <!-- Heroicon name: outline/menu-alt-2 -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
          </div>
        </header>

        <!-- Main content -->
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: "",
    };
  },
  watch: {
    $route(to, from) {
      this.currentPath = to.path;
    },
  },
  mounted() {
    this.currentPath = this.$route.path;
  },
};
</script>

<style>
</style>