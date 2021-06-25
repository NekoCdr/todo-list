class Task {
  constructor(id = 0) {
    this.id = id;
    this.title = "";
    this.description = "";
    this.completed = false;
    this.createdAt = Date.now();
  }
}

export default Task;
