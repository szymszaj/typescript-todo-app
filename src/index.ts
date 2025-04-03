import { TaskService } from "./services/TaskService";
import { Logger } from "./utils/Logger";

const taskService = new TaskService();

Logger.info("Adding tasks...");
taskService.addTask("Learn TypeScript");
taskService.addTask("Prepare presentation");

Logger.info("Listing tasks...");
taskService.listTasks();

Logger.info("Completing a task...");
taskService.completeTask(1);

Logger.info("Listing tasks...");
taskService.listTasks();

Logger.info("Removing a task...");
taskService.removeTask(2);

Logger.info("Listing tasks...");
taskService.listTasks();
