import { Component, Input, OnInit } from '@angular/core';
import { TodoType } from '../home.component';

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
export class TodolistComponent implements OnInit {

    @Input() todo: TodoType;

    tasks: Array<TaskType> = [
        {
            title: 'learn objects',
            startDate: '17/10/20',
            priority: 1,
            description: 'bla bla bla',
            deadline: '17/10/21',
            id: '10',
            todoListId: '1',
            status: 0,
            order: 1,
            addedDate: '17/10/20',
            completed: false
        },
        {
            title: 'learn tags',
            startDate: '17/10/20',
            priority: 1,
            description: 'bla bla bla',
            deadline: '17/10/21',
            id: '20',
            todoListId: '2',
            status: 0,
            order: 1,
            addedDate: '17/10/20',
            completed: false
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
