import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userService.getTokenVerify().pipe(
      switchMap((res: any) => {
        // Se a verificação do token for bem-sucedida
        return of(true);
      }),
      catchError(() => {
        // Se a verificação do token falhar, tenta fazer o refresh
        return this.userService.postRefresh().pipe(
          map((res: any) => {
            if (res && res.token) {
              this.userService.accessToken = res.token;

              return true;
            }
            this.router.navigate(['/login']);
            return false;
          }),
          catchError(() => {
            this.router.navigate(['/login']);
            return of(false);
          })
        );
      })
    );
  }
}
