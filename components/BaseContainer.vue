<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <!-- Primary column -->
      <section
        aria-labelledby="primary-heading"
        class="
          min-w-0
          flex-1
          h-full
          flex flex-col
          overflow-y-auto
          lg:order-last
        "
      >
        <h1 id="primary-heading" class="sr-only">APP Content</h1>
        <div class="p-4 sm:px-6 lg:px-8">
          <slot></slot>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>