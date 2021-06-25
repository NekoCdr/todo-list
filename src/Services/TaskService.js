import Task from "@/Models/Task";

class TaskService {
  constructor() {
    this.MODE_CREATE = 0;
    this.MODE_UPDATE = 1;
  }

  createNewTask({ id, title, description }) {
    let task = new Task(id);

    task.title = title;
    task.description = description;

    return task;
  }

  compareByCreatedTime(a, b) {
    if (a.createdAt > b.createdAt) return 1;
    if (a.createdAt === b.createdAt) return 0;
    if (a.createdAt < b.createdAt) return -1;
  }
}

export default TaskService;
