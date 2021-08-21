import { GlobalService } from './../services/global.service';

import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,
                private global: GlobalService) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {

        if (!this.global.getLogInStatus()) {
            this.router.navigate(['/login']);
        }
        return this.global.getLogInStatus();
    }
}
