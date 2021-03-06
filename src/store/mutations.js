import Vue from "vue";

export default {
  addTaskToList(state, task) {
    state.taskList.push(task);
  },
  updateTask(state, updatedTask) {
    let task = state.taskList.find((task) => task.id === updatedTask.id);
    task.title = updatedTask.title;
    task.description = updatedTask.description;
  },
  incrementID(state) {
    state.autoincrementID++;
  },
  toggleTaskStatus(state, taskID) {
    let task = state.taskList.find((task) => task.id === taskID);
    task.completed = !task.completed;
  },
  deleteTask(state, taskID) {
    let taskIndex = state.taskList.findIndex((task) => task.id === taskID);
    Vue.delete(state.taskList, taskIndex);
  },
};
