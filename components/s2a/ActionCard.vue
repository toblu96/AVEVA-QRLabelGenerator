<template>
  <li
    class="
      relative
      group
      rounded-lg
      border border-gray-300
      bg-white
      px-6
      py-5
      shadow-sm
      flex
      h-full
      w-full
      items-center
      space-x-10
    "
  >
    <!-- QR content -->
    <div v-if="!isEditing" class="flex flex-col items-center w-full space-y-4">
      <div class="p-4 rounded-xl shadow-lg bg-gray-200">
        <vue-qrcode
          :value="data.actionValue"
          background="transparent"
          render-as="svg"
          size="200"
        />
      </div>
      <div class="w-full pt-2 text-center">
        <p class="text-lg font-medium text-gray-900 truncate">
          {{ data.actionName }}
        </p>
      </div>
    </div>
    <!-- editable content -->
    <form
      v-else
      class="flex flex-col space-y-6 w-full h-full justify-between"
      @submit.prevent="editData"
    >
      <div class="w-full space-y-4">
        <div>
          <label
            for="action-name"
            class="block text-sm font-medium text-gray-700"
          >
            Action Name
          </label>
          <div class="mt-1">
            <input
              id="action-name"
              name="action-name"
              type="action-name"
              required
              ref="actionName"
              :value="data.actionName"
              class="
                appearance-none
                block
                w-full
                px-3
                py-2
                border border-gray-300
                rounded-md
                shadow-sm
                placeholder-gray-400
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                sm:text-sm
              "
            />
          </div>
        </div>

        <div>
          <label
            for="action-value"
            class="block text-sm font-medium text-gray-700"
          >
            Action Value
          </label>
          <div class="mt-1">
            <input
              id="action-value"
              name="action-value"
              type="action-value"
              required
              ref="actionValue"
              :value="data.actionValue"
              class="
                appearance-none
                block
                w-full
                px-3
                py-2
                border border-gray-300
                rounded-md
                shadow-sm
                placeholder-gray-400
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                sm:text-sm
              "
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between w-full">
        <button
          type="button"
          @click="deleteAction"
          class="
            inline-flex
            items-center
            px-3
            py-2
            rounded-md
            text-sm
            font-medium
            text-gray-400
            bg-white
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div>
          <button
            type="button"
            @click="isEditing = false"
            class="
              mt-3
              w-full
              inline-flex
              justify-center
              rounded-md
              border border-gray-300
              shadow-sm
              px-4
              py-2
              bg-white
              text-base
              font-medium
              text-gray-700
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              sm:mt-0
              sm:ml-3
              sm:w-auto
              sm:text-sm
            "
          >
            Cancel
          </button>
          <button
            type="submit"
            class="
              w-full
              inline-flex
              justify-center
              rounded-md
              border border-transparent
              shadow-sm
              px-4
              py-2
              bg-indigo-600
              text-base
              font-medium
              text-white
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              sm:ml-3
              sm:w-auto
              sm:text-sm
            "
          >
            Save
          </button>
        </div>
      </div>
    </form>
    <!-- edit button -->
    <div
      v-if="!isEditing"
      class="absolute hidden group-hover:flex top-3 right-3"
    >
      <button
        @click="isEditing = true"
        type="button"
        class="
          bg-white
          rounded-full
          shadow
          h-12
          w-12
          flex
          items-center
          justify-center
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500
        "
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          ></path>
        </svg>
        <span class="sr-only">Edit action</span>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
    groupId: {
      type: String,
    },
  },
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    async editData() {
      const data = await this.$http.$put(
        `${this.$config.baseURL}/api/s2a/groups/${this.groupId}/action/${this.data.id}`,
        {
          actionName: this.$refs.actionName.value,
          actionValue: this.$refs.actionValue.value,
        }
      );

      if (data.error) {
        console.log(data.error);
        return;
      }

      this.$emit(
        "editAction",
        this.groupId,
        this.data.id,
        this.$refs.actionName.value,
        this.$refs.actionValue.value
      );
      this.isEditing = false;
    },
    async deleteAction() {
      const data = await this.$http.$delete(
        `${this.$config.baseURL}/api/s2a/groups/${this.groupId}/action/${this.data.id}`
      );

      if (data.error) {
        console.log(data.error);
        return;
      }

      this.$emit("deleteAction");
    },
  },
};
</script>

<style>
</style>