import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    isAuth = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        this.authService.me()
            .subscribe((res) => {
                if (res.resultCode === 0) {
                    this.isAuth = true;
                    this.router.navigate(['/']);
                } else if (res.resultCode === 1) {
                    this.isAuth = false;
                    this.router.navigate(['/login']);
                }
            });

        return this.isAuth;
    }

}
