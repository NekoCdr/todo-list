import TaskServiceClass from "@/Services/TaskService";
const TaskService = new TaskServiceClass();

export default {
  handleTaskForm(context, { mode, task }) {
    if (mode === TaskService.MODE_CREATE) {
      context.commit("addTaskToList", TaskService.createNewTask(task));
      context.commit("incrementID");
    } else if (mode === TaskService.MODE_UPDATE) {
      context.commit("updateTask", task);
    }
  },
  toggleTaskStatus(context, { taskID }) {
    context.commit("toggleTaskStatus", taskID);
  },
};
