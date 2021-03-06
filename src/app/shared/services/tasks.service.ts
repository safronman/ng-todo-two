import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TaskType } from '../../home/todolist/todolist.component';
import { CommonResponseType } from './todolists.service';

type TasksResponseType = {
    error: string | null
    items: Array<TaskType>
    totalCount: number
};

export type UpdateTaskModelType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
};

export type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: number
    priority?: number
    startDate?: string
    deadline?: string
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

    addTask(todoId: string, title: string) {
        return this.http.post<CommonResponseType<{item: TaskType}>>(`${ environment.baseUrl }/todo-lists/${ todoId }/tasks`,
            {title}, this.options);
    }

    deleteTask(taskId: string, todoId: string) {
        return this.http.delete<CommonResponseType>(`${ environment.baseUrl }/todo-lists/${ todoId }/tasks/${ taskId }`, this.options);
    }

    changeTask(todoId: string, taskId: string, model: UpdateTaskModelType) {
        return this.http.put<CommonResponseType>(`${ environment.baseUrl }/todo-lists/${ todoId }/tasks/${ taskId }`,
            model, this.options);
    }

}
