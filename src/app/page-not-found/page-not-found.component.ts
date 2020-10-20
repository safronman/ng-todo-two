import { Component } from '@angular/core';

@Component({
    selector: 'app-page-not-found',
    template: `<h1 class="title">404 PAGE NOT FOUND</h1>`,
    styles: [`
        .title {
            color: purple;
            text-align: center;
        }
    `]
})
export class PageNotFoundComponent {
}
