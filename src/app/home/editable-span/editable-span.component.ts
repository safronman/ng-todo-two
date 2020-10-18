import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-editable-span',
    templateUrl: './editable-span.component.html',
    styleUrls: ['./editable-span.component.css']
})
export class EditableSpanComponent implements OnInit {

    @Input() title: string;
    @Output() changeTitle = new EventEmitter<string>();

    @Input() editTitleMode: boolean;
    @Output() changeEditTitleMode = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit(): void {
    }

    activateEditMode() {
        this.changeEditTitleMode.emit(true);
    }

    activateViewMode(title: string) {
        this.changeTitle.emit(title);
    }

}
