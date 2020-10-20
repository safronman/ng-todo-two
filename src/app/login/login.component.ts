import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email: new FormControl('',
            [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,8}$')]),
        password: new FormControl('',
            [Validators.minLength(2), Validators.required]),
    });

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.authService.login(this.loginForm.value)
            .subscribe((res) => {
                if (res.resultCode === 0) {
                    this.loginForm.reset();
                    this.router.navigate(['/']);
                }
            });
    }
}
