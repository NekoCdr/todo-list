<template>
  <div :class="[{ 'task-completed': task.completed }, 'task-card']">
    <div class="task-title">{{ task.title }}</div>
    <div class="task-created-time">{{ taskCreatedTime }}</div>
    <div class="task-description">{{ task.description }}</div>
    <div class="card-buttons">
      <router-link
        :to="{ name: 'EditTask', params: { id: task.id } }"
        class="action-button"
      >
        Edit task
      </router-link>
      <div v-if="task.completed" @click="toggleStatus" class="action-button">
        Open
      </div>
      <div v-else class="action-button" @click="toggleStatus">Close</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  name: "TaskCard",
  computed: {
    taskCreatedTime() {
      let createdAt = this.task.createdAt;
      return new Date(createdAt).toLocaleString("ru-RU");
    },
  },
  methods: {
    toggleStatus() {
      this.$store.dispatch("toggleTaskStatus", { taskID: this.task.id });
    },
  },
};
</script>
