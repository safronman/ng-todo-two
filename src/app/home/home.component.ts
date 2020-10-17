import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodolistsService } from '../shared/services/todolists.service';

export type TodoType = {
    id: string
    title: string
    addedDate: string
    order: number
};

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    todolists: Array<TodoType> = [];
    subscriptionGetTodo: Subscription;
    subscriptionCreateTodo: Subscription;

    constructor(private todolistsService: TodolistsService) {
    }

    ngOnInit(): void {
        this.subscriptionGetTodo = this.todolistsService.getTodos()
            .subscribe((res) => {
                    this.todolists = res;
                }
            );
    }

    addTodolist(title: string) {
        this.subscriptionCreateTodo = this.todolistsService.addTodo(title)
            .subscribe((res) => {
                const newTodo = res.data.item;
                this.todolists.unshift(newTodo);
            });
    }

    ngOnDestroy(): void {
        this.subscriptionGetTodo.unsubscribe();
        this.subscriptionCreateTodo.unsubscribe();
    }
}
