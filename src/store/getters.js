export default {
  getTaskList: (state) => {
    return state.taskList;
  },
  getTaskById: (state) => (id) => {
    return state.taskList.find((task) => task.id === id);
  },
  getAutoincrementID: (state) => {
    return state.autoincrementID;
  },
};
