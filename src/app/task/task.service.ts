import { Injectable } from "@angular/core";
import { Task } from "./task";

import {localforage} from 'localforage';


export const MOCKTASKS: Task[] = [
  { id: 1, name: "ServiceNow training", duration: 1 },
  { id: 2, name: "Code review", duration: 1 }
  ];

@Injectable()
export class TaskService {
  constructor() {
  }

  getTasks(): Promise<Task[]> {
    // api call: {
    // onSuccess(asyncResult) {
    //  return Promise.resolve(asyncResult);
    // }
    // }
    return Promise.resolve(MOCKTASKS);
  }


  addTask(task: Task){
    localforage.setItem('tasks', task);
  }

  getTask(): Task{
    return null;
  }
}
