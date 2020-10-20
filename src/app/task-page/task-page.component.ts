import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../shared/services/tasks.service';
import { TaskType } from '../home/todolist/todolist.component';

@Component({
    selector: 'app-task-page',
    templateUrl: './task-page.component.html',
    styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

    task: TaskType;

    constructor(
        private route: ActivatedRoute,
        private taskService: TasksService
    ) {
    }

    ngOnInit(): void {
        const taskId = this.route.snapshot.paramMap.get('taskId');
        const todolistId = this.route.snapshot.paramMap.get('todolistId');
        this.getTaskById(taskId, todolistId);
    }

    getTaskById(taskId, todolistId) {
        this.taskService.getTasks(todolistId)
            .subscribe((res) => {
                this.task = res.items.find(t => t.id === taskId);
            });

    }

}
