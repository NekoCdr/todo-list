<template>
  <div class="todo-list">
    <div class="todo-list-header">
      <router-link to="/task/new" class="action-button">Add task</router-link>
    </div>
    <div class="task-list">
      <div v-if="openedTasks.length < 1 && completedTasks.length < 1">
        Empty list
      </div>
      <task-card v-for="task in openedTasks" :key="task.id" :task="task" />
      <task-card v-for="task in completedTasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import TaskServiceClass from "@/Services/TaskService";
const TaskService = new TaskServiceClass();

export default {
  name: "TaskList",
  components: {
    TaskCard: () => import("@/views/TaskCard"),
  },
  computed: {
    openedTasks() {
      let taskList = this.$store.getters.getOpenedTasks;
      return taskList.sort(TaskService.compareByCreatedTime);
    },
    completedTasks() {
      let taskList = this.$store.getters.getCompletedTasks;
      return taskList.sort(TaskService.compareByCreatedTime);
    },
  },
};
</script>
