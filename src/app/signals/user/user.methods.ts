import { patchState, withMethods } from '@ngrx/signals';
import { UserService } from '../../services/user/user.service';
import { inject } from '@angular/core';
import { tap, delay } from 'rxjs';
import { LoginDtoRequest } from '../../services/user/dtos/login.dto.request';
import { LoginDtoResponse } from '../../services/user/dtos/login.dto.response';
import { CreateUserDtoRequest } from '../../services/user/dtos/createUser.dto.request';

export function UserMethods() {
  return withMethods((store, userService = inject(UserService)) => ({
    async postLogin(body: LoginDtoRequest) {
      patchState(store, { loading: true });
      return await userService
        .postLogin(body)
        .pipe(
          delay(1000),
          tap({
            next: (user: LoginDtoResponse) => {
              return patchState(store, { user: user.user, connected: true });
            },
            error: () => {
              console.error;
              return patchState(store, { connected: false });
            },
            finalize: () => patchState(store, { loading: false }),
          })
        )
        .subscribe();
    },
    async postCreateUser(body: CreateUserDtoRequest) {
      patchState(store, { loading: true });
      return await userService
        .postCreateUser(body)
        .pipe(
          tap({
            next: (user: any) => {
              return patchState(store, () => ({
                created: true,
              }));
            },
            error: () => {
              console.error;
              return patchState(store, () => ({
                connected: false,
                created: false,
              }));
            },
            finalize: () =>
              patchState(store, () => ({
                connected: false,
                created: false,
              })),
          })
        )
        .subscribe();
    },
    resetCreated() {
      patchState(store, () => ({
        created: false,
      }));
    },
    // carregar: rxMethod<void>(
    //   pipe(
    //     switchMap(() => {
    //       patchState(store, { loading: true });

    //       return userService.login('user', 'password').pipe(
    //         tap({
    //           next: (items) => patchState(store, { items }),
    //           error: console.error,
    //           finalize: () => patchState(store, { loading: false }),
    //         })
    //       );
    //     })
    //   )
    // ),
  }));
}
