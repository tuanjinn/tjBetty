import { Injectable } from "@angular/core";
import { Task } from "./task"

export const MOCKTASKS: Task[] = [
  { id: 1, name: "ServiceNow training", duration: 1 },
  { id: 2, name: "Code review", duration: 1 }
  ];

@Injectable()
export class TaskService {
  constructor() {
  }

  getTasks(): Promise<Task[]> {
    return Promise.resolve(MOCKTASKS);
  }

  getTask(): Task{
    return null;
  }
}
