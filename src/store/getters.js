export default {
  getOpenedTasks: (state) => {
    return state.taskList.filter((task) => task.completed === false);
  },
  getCompletedTasks: (state) => {
    return state.taskList.filter((task) => task.completed === true);
  },
  getTaskById: (state) => (id) => {
    return state.taskList.find((task) => task.id === id);
  },
  getAutoincrementID: (state) => {
    return state.autoincrementID;
  },
};
