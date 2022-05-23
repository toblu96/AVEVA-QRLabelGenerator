<template>
  <div>
    <div
      class="
        pb-5
        mt-4
        border-b border-gray-200
        sm:flex
        sm:items-center
        sm:justify-between
      "
    >
      <h3 v-if="!isEditing" class="text-lg leading-6 font-medium text-gray-900">
        {{ groupData.groupName }}
      </h3>
      <div v-else class="w-1/2">
        <label for="email" class="sr-only">Email</label>
        <input
          @keyup.enter="saveGroupEdit(groupData.id, groupData.groupName)"
          type="text"
          name="title"
          id="title"
          class="
            shadow-sm
            focus:ring-indigo-500
            focus:border-indigo-500
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
          v-model="groupData.groupName"
        />
      </div>
      <div class="mt-3 flex sm:mt-0 sm:ml-4 space-x-4">
        <button
          type="button"
          @click="deleteGroup(groupData.id)"
          :class="isDeleting ? 'animate-pulse' : ''"
          class="
            inline-flex
            items-center
            px-3
            py-2
            border border-gray-300
            rounded-md
            shadow-sm
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
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          v-if="isEditing"
          type="button"
          @click="saveGroupEdit(groupData.id, groupData.groupName)"
          :class="isSaving ? 'animate-pulse' : ''"
          class="
            ml-3
            inline-flex
            items-center
            px-3
            py-2
            border border-transparent
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-white
            bg-gray-600
            hover:bg-gray-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          v-else
          type="button"
          @click="isEditing = true"
          class="
            ml-3
            inline-flex
            items-center
            px-3
            py-2
            border border-transparent
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-white
            bg-gray-600
            hover:bg-gray-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="pt-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    groupData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      isSaving: false,
      isDeleting: false,
    };
  },
  methods: {
    async saveGroupEdit(id, groupName) {
      this.isSaving = true;

      const data = await this.$http.$put(
        `${this.$config.baseURL}/api/s2a/groups/${id}`,
        { groupName: groupName }
      );

      if (data.error) {
        console.log(data.error);
        return;
      }

      this.isSaving = false;
      this.isEditing = false;
    },
    async deleteGroup(id) {
      this.isDeleting = true;

      const data = await this.$http.$delete(
        `${this.$config.baseURL}/api/s2a/groups/${id}`
      );

      if (data.error) {
        console.log(data.error);
        return;
      }

      this.isDeleting = false;
      this.$emit("deleteGroup");
    },
  },
};
</script>

<style>
</style>