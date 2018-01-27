import {Component, OnInit} from '@angular/core';
import {TaskService} from './task.service';

import {Task} from './task'

@Component({
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {
  tasks : Task[];
  activeTask: Task;
  foo: string;


  constructor(private taskService : TaskService) {
    this.foo = "bar";
  }

  ngOnInit() {

    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  addTask(name) {
    //var newTask : Task = { id: 3, name: name, description: "", duration: 4 };
    this.tasks.push({ id: 3, name: name, duration: 4 });
    this.taskService.addTask({ id: 3, name: name, duration: 4 });
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
