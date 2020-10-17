import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-add-new-item-form',
    templateUrl: './add-new-item-form.component.html',
    styleUrls: ['./add-new-item-form.component.css']
})
export class AddNewItemFormComponent {

    title = '';

    @Output() addItem = new EventEmitter<string>();

    addItemHandler() {
        this.addItem.emit(this.title);
    }
}
