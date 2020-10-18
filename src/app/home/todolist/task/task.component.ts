import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskType } from '../todolist.component';
import { TasksService } from '../../../shared/services/tasks.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

    @Input() task: TaskType;
    @Output() deleteTask = new EventEmitter<string>();

    editTitleMode = false;

    constructor(private tasksService: TasksService) {
    }

    ngOnInit(): void {
    }

    deleteHandler(taskId: string) {
        this.deleteTask.emit(taskId);
    }

    changeTaskTitle(title: string) {
        const newTask = {
            ...this.task, title
        };

        this.tasksService.changeTaskTitle(title, newTask)
            .subscribe((res) => {
                this.editTitleMode = false;
            });
    }

    changeEditTitleMode(editTitleMode: boolean) {
        this.editTitleMode = editTitleMode;
    }
}
