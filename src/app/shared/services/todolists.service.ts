import { Injectable } from '@angular/core';
import { TodoType } from '../../home/home.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

type CreateTodoResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {
        item: TodoType
    }
};

@Injectable({
    providedIn: 'root'
})
export class TodolistsService {

    options = {
        withCredentials: true,
        headers: new HttpHeaders().append('API-KEY', environment.apiKey)
    };

    constructor(private http: HttpClient) {
    }

    getTodos(): Observable<Array<TodoType>> {
        return this.http.get<Array<TodoType>>(`${ environment.baseUrl }/todo-lists`, this.options);
    }

    addTodo(title: string): Observable<CreateTodoResponseType> {
        return this.http.post<CreateTodoResponseType>(`${ environment.baseUrl }/todo-lists`, {title}, this.options);
    }

}
