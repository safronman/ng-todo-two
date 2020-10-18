import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TodoType } from '../home.component';
import { TodolistsService } from '../../shared/services/todolists.service';
import { Subscription } from 'rxjs';
import { TasksService } from '../../shared/services/tasks.service';

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
};

@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit, OnDestroy {

    @Input() todo: TodoType;
    @Output() deleteTodo = new EventEmitter<string>();

    tasks: Array<TaskType> = [];
    editTitleMode = false;

    subscriptionGetTasks: Subscription;

    subscriptionChangeTodoTitle: Subscription;

    constructor(
        private todolistsService: TodolistsService,
        private tasksService: TasksService,
    ) {
    }

    ngOnInit(): void {
        this.subscriptionGetTasks = this.tasksService.getTasks(this.todo.id)
            .subscribe((res) => {
                this.tasks = res.items;
            });
    }

    deleteTodoHandler(todoId: string) {
        this.deleteTodo.emit(todoId);
    }

    activateEditMode() {
        this.editTitleMode = true;
    }

    activateViewMode(todoId: string, title: string) {
        this.subscriptionChangeTodoTitle = this.todolistsService.changeTodoTitle(todoId, title)
            .subscribe((res) => {
                if (res.resultCode === 0) {
                    this.editTitleMode = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.subscriptionChangeTodoTitle.unsubscribe();
        this.subscriptionGetTasks.unsubscribe();
    }
}
