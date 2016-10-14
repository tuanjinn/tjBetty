import {Component, OnInit} from '@angular/core';
import {TaskService} from './task.service';

import {Task} from './task'

@Component({
  templateUrl: './tasks.component.html',
  providers: [TaskService]
})
export class TasksComponent implements OnInit {
  tasks : Task[];
  activeTask: Task;

  constructor(private taskService : TaskService) {

  }

  ngOnInit() {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  addTask(name) {
    //var newTask : Task = { id: 3, name: name, description: "", duration: 4 };
    this.tasks.push({ id: 3, name: name, duration: 4 });
  }

  activateTask(task: Task)
  {
    this.activeTask = task;
  }

  newTaskKeyPressEvent($event, name){
    if ($event.keyCode == 13) {
      this.addTask(name);
    }
  }
}
