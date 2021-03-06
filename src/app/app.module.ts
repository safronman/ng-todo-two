import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './home/todolist/todolist.component';
import { TaskComponent } from './home/todolist/task/task.component';
import { AddNewItemFormComponent } from './home/add-new-item-form/add-new-item-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EditableSpanComponent } from './home/editable-span/editable-span.component';
import { TodoFooterComponent } from './home/todolist/todo-footer/todo-footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { TaskPageComponent } from './task-page/task-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        TodolistComponent,
        TaskComponent,
        AddNewItemFormComponent,
        EditableSpanComponent,
        TodoFooterComponent,
        PageNotFoundComponent,
        MenuComponent,
        TaskPageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
