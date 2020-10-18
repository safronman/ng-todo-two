import { Injectable } from '@angular/core';
import { TodoType } from '../../home/home.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type CommonResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsError: Array<string>
    data: T
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

    addTodo(title: string): Observable<CommonResponseType<{item: TodoType}>> {
        return this.http.post<CommonResponseType<{item: TodoType}>>(`${ environment.baseUrl }/todo-lists`, {title}, this.options);
    }

    deleteTodo(todoId: string): Observable<CommonResponseType> {
        return this.http.delete<CommonResponseType>(`${ environment.baseUrl }/todo-lists/${ todoId }`, this.options);
    }

    changeTodoTitle(todoId: string, title: string): Observable<CommonResponseType> {
        return this.http.put<CommonResponseType>(`${ environment.baseUrl }/todo-lists/${ todoId }`, {title}, this.options);
    }

}
