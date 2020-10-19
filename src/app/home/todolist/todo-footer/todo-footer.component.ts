import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterType } from '../todolist.component';

@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

    @Input() filterValue: FilterType;
    @Input() addedDate: string;
    @Output() changeFilterValueEmit = new EventEmitter<FilterType>();

    constructor() {
    }

    ngOnInit(): void {
    }

    changeFilterValue(value: FilterType) {
        this.changeFilterValueEmit.emit(value);
    }
}
