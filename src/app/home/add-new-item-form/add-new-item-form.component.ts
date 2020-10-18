import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-add-new-item-form',
    templateUrl: './add-new-item-form.component.html',
    styleUrls: ['./add-new-item-form.component.css']
})
export class AddNewItemFormComponent {

    title = '';
    showEmptyInputError = false;

    @Output() addItem = new EventEmitter<string>();

    addItemHandler() {
        if (this.title.trim()) {
            this.showEmptyInputError = false;
            this.addItem.emit(this.title);
            this.title = '';
        } else {
            this.showEmptyInputError = true;
        }
    }
}
