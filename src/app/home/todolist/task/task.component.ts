import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskType } from '../todolist.component';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

    @Input() task: TaskType;
    @Output() deleteTask = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }

    deleteHandler(taskId: string) {
        this.deleteTask.emit(taskId);
    }
}
