import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './home/todolist/todolist.component';
import { TaskComponent } from './home/todolist/task/task.component';
import { AddNewItemFormComponent } from './home/add-new-item-form/add-new-item-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EditableSpanComponent } from './home/editable-span/editable-span.component';
import { TodoFooterComponent } from './home/todolist/todo-footer/todo-footer.component';
import { AppRoutingModule } from './app-routing.module';

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
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
