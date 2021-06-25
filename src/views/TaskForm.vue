<template>
  <div class="task-form">
    <div class="task-card">
      <input v-model="task.title" class="task-title" />
      <textarea v-model="task.description" class="task-description" />
      <div class="card-buttons">
        <router-link to="/" class="action-button">Cancel</router-link>
        <div class="action-button" @click="handleForm">Save Task</div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "@/Models/Task";
import TaskServiceClass from "@/Services/TaskService";
const TaskService = new TaskServiceClass();

export default {
  name: "TaskForm",
  data() {
    return {
      id: this.$route.params.id,
      task: new Task(this.$store.getters.getAutoincrementID),
      mode: TaskService.MODE_CREATE,
    };
  },
  mounted() {
    if (this.id !== undefined) {
      this.mode = TaskService.MODE_UPDATE;
      this.task = this.$store.getters.getTaskById(this.id);
    }
  },
  methods: {
    handleForm() {
      this.$store.dispatch("handleTaskForm", {
        mode: this.mode,
        task: this.task,
      });
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
