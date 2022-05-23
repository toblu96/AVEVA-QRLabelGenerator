<template>
  <BaseContainer>
    <p v-if="$fetchState.pending">Fetching s2a groups...</p>
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
    <div v-else class="space-y-10">
      <!-- groups -->
      <s2aGroupHeader
        v-for="group in groups"
        :key="group.id"
        :groupData="group"
        @deleteGroup="deleteGroup(group.id)"
      >
        <ul
          role="list"
          class="
            grid grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
          <!-- action cards -->
          <s2aActionCard
            v-for="action in group.s2aActions"
            :key="action.id"
            :data="action"
            :groupId="group.id"
            @editAction="editAction"
            @deleteAction="deleteAction(group.id, action.id)"
          />

          <!-- adding new QR-Code action card -->
          <s2aAddActionForm :groupId="group.id" @newAction="addNewAction" />
        </ul>
      </s2aGroupHeader>
      <!-- adding new group -->
      <div class="border-t border-gray-200">
        <div v-if="groups.length == 0" class="text-center">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <h2 class="mt-2 text-lg font-medium text-gray-900">
            Add a new Group
          </h2>
          <p class="mt-1 text-sm text-gray-500">
            You haven’t added any groups yet. With groups, you can add multiple
            QR-Codes in one place and logically group them.
          </p>
        </div>
        <form @submit.prevent="addGroup" class="mt-6 flex">
          <label for="group-name" class="sr-only">Group name</label>
          <input
            type="text"
            name="group-title"
            id="group-title"
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
            placeholder="Enter a group name"
            v-model="newGroupName"
          />
          <button
            type="submit"
            class="
              ml-4
              flex-shrink-0
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-md
              shadow-sm
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Add Group
          </button>
        </form>
      </div>
    </div>
  </BaseContainer>
</template>

<script>
export default {
  fetchOnServer: false,
  data() {
    return {
      groups: [],
      newGroupName: "",
    };
  },
  async fetch() {
    this.groups = await fetch(`${this.$config.baseURL}/api/s2a/groups`).then(
      (res) => res.json()
    );
    if (this.groups.error) {
      throw new Error(this.groups.error);
    }
  },
  methods: {
    async deleteGroup(id) {
      this.groups = this.groups.filter((obj) => obj.id != id);
    },
    async addGroup() {
      const data = await this.$http.$post(
        `${this.$config.baseURL}/api/s2a/groups`,
        { groupName: this.newGroupName }
      );

      if (data.error) {
        console.log(data.error);
        return;
      }

      this.newGroupName = "";
      this.$fetch();
    },
    async addNewAction(groupId, data) {
      this.groups.find((x) => x.id === groupId).s2aActions.push(data);
    },
    async editAction(groupId, actionId, name, value) {
      this.groups
        .find((x) => x.id === groupId)
        .s2aActions.find((x) => x.id === actionId).actionName = name;
      this.groups
        .find((x) => x.id === groupId)
        .s2aActions.find((x) => x.id === actionId).actionValue = value;
    },
    async deleteAction(groupId, actionId) {
      this.groups.find((x) => x.id === groupId).s2aActions = this.groups
        .find((x) => x.id === groupId)
        .s2aActions.filter((obj) => obj.id != actionId);
    },
  },
};
</script>

<style>
</style>