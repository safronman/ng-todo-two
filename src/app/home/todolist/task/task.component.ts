import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskType } from '../todolist.component';
import { TasksService, UpdateDomainTaskModelType, UpdateTaskModelType } from '../../../shared/services/tasks.service';

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
        this.changeTask({title});
    }

    changeTaskStatus(event: Event) {
        const taskStatus = (event.currentTarget as HTMLInputElement).checked;
        this.changeTask({status: taskStatus ? 2 : 0});
    }

    changeTask(domainModelType: UpdateDomainTaskModelType) {
        const model: UpdateTaskModelType = {
            title: this.task.title,
            startDate: this.task.startDate,
            priority: this.task.priority,
            description: this.task.description,
            deadline: this.task.deadline,
            status: this.task.status,
            ...domainModelType
        };

        this.tasksService.changeTask(this.task.todoListId, this.task.id, model)
            .subscribe((res) => {
                this.editTitleMode = false;
            });
    }

    changeEditTitleMode(editTitleMode: boolean) {
        this.editTitleMode = editTitleMode;
    }
}
