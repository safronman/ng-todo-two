import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonResponseType } from './todolists.service';


type UserFormType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
};


type UserResponseType = {
    id: number
    email: string
    login: string
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    options = {
        withCredentials: true,
        headers: new HttpHeaders().append('API-KEY', environment.apiKey)
    };

    constructor(private http: HttpClient) {
    }

    login(user: UserFormType) {
        return this.http.post<CommonResponseType<{userId: number}>>(`${ environment.baseUrl }/auth/login`,
            user, this.options);
    }

    logout() {
        return this.http.delete<CommonResponseType>(`${ environment.baseUrl }/auth/login`, this.options);
    }

    me() {
        return this.http.get<CommonResponseType<UserResponseType>>(`${ environment.baseUrl }/auth/me`, this.options);
    }
}
