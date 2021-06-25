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
import TaskCard from "@/views/TaskCard";
import TaskServiceClass from "@/Services/TaskService";
const TaskService = new TaskServiceClass();

export default {
  name: "TaskList",
  components: { TaskCard },
  computed: {
    taskList() {
      let taskList = this.$store.getters.getTaskList;
      return taskList.sort(TaskService.compareByCreatedTime);
    },
    openedTasks() {
      return this.taskList.filter((task) => task.completed === false);
    },
    completedTasks() {
      return this.taskList.filter((task) => task.completed === true);
    },
  },
};
</script>
