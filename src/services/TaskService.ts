import { Task } from "../models/Task";

export class TaskService {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(title: string): void {
    const task: Task = {
      id: this.nextId++,
      title,
      completed: false,
    };
    this.tasks.push(task);
    console.log(`Task added: ${title}`);
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    console.log(`Task removed with ID: ${id}`);
  }

  completeTask(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = true;
      console.log(`Task with ID: ${id} marked as completed`);
    } else {
      console.log(`Task with ID: ${id} not found`);
    }
  }

  listTasks(): void {
    console.log("Task List:");
    this.tasks.forEach((task) => {
      console.log(
        `${task.id}. ${task.title} - ${
          task.completed ? "completed" : "not completed"
        }`
      );
    });
  }
}
