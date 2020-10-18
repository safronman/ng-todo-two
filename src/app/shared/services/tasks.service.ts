import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TaskType } from '../../home/todolist/todolist.component';

type TasksResponseType = {
    error: string | null
    items: Array<TaskType>
    totalCount: number
};


@Injectable({
    providedIn: 'root'
})
export class TasksService {

    options = {
        withCredentials: true,
        headers: new HttpHeaders().append('API-KEY', environment.apiKey)
    };

    constructor(private http: HttpClient) {
    }

    getTasks(todoId: string) {
        return this.http.get<TasksResponseType>(`${ environment.baseUrl }/todo-lists/${ todoId }/tasks`, this.options);
    }
}
