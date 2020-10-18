import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TodoType } from '../home.component';
import { TodolistsService } from '../../shared/services/todolists.service';
import { Subscription } from 'rxjs';
import { TasksService } from '../../shared/services/tasks.service';

export type TaskType = {
    description: string
    title: string
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
    subscriptionAddTask: Subscription;
    subscriptionDelTask: Subscription;
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

    addTask(title: string) {
        this.subscriptionAddTask = this.tasksService.addTask(this.todo.id, title)
            .subscribe((res) => {
                this.tasks.unshift(res.data.item);
            });
    }

    deleteTask(taskId: string) {
        this.subscriptionDelTask = this.tasksService.deleteTask(taskId, this.todo.id)
            .subscribe((res) => {
                if (res.resultCode === 0) {
                    this.tasks = this.tasks.filter(t => t.id !== taskId);
                }
            });
    }

    changeTodoTitle(title: string) {
        this.subscriptionChangeTodoTitle = this.todolistsService.changeTodoTitle(this.todo.id, title)
            .subscribe((res) => {
                this.editTitleMode = false;
            });
    }

    changeEditTitleMode(editTitleMode: boolean) {
        this.editTitleMode = editTitleMode;
    }

    ngOnDestroy(): void {
        this.subscriptionGetTasks.unsubscribe();
        this.subscriptionAddTask.unsubscribe();
        this.subscriptionDelTask.unsubscribe();
        this.subscriptionChangeTodoTitle.unsubscribe();
    }


}
