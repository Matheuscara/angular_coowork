import { patchState, withMethods } from '@ngrx/signals';
import { UserService } from '../../services/user/user.service';
import { inject } from '@angular/core';
import { tap, delay, catchError, throwError } from 'rxjs';
import { LoginDtoRequest } from '../../services/user/dtos/login.dto.request';
import { LoginDtoResponse } from '../../services/user/dtos/login.dto.response';
import { CreateUserDtoRequest } from '../../services/user/dtos/createUser.dto.request';
import { initialState } from './user.state';
import { User } from './states/user.state';

export function UserMethods() {
  return withMethods((store, userService = inject(UserService)) => ({
    async postLogin(body: LoginDtoRequest) {
      patchState(store, {
        login: {
          loading: true,
          success: false,
          error: '',
        },
      });
      return await userService
        .postLogin(body)
        .pipe(
          catchError((err) => {
            patchState(store, {
              login: {
                loading: false,
                success: false,
                error: err.error.message,
              },
            });
            return throwError(err);
          }),
          tap((user: LoginDtoResponse) => {
            userService.accessToken = user.token;

            return patchState(store, {
              login: {
                loading: false,
                success: true,
                error: '',
              },
            });
          })
        )
        .subscribe();
    },
    async postCreateUser(body: CreateUserDtoRequest) {
      patchState(store, {
        createUser: {
          loading: true,
          success: false,
          error: '',
        },
      });
      return userService
        .postCreateUser(body)
        .pipe(
          catchError((err) => {
            patchState(store, {
              createUser: {
                loading: false,
                success: false,
                error: err.error.message,
              },
            });
            return throwError(err);
          }),
          tap(() => {
            return patchState(store, {
              createUser: {
                loading: false,
                success: true,
                error: '',
              },
            });
          })
        )
        .subscribe();
    },
    async getUser(test?: any) {
      console.log(test || 'nada');
      patchState(store, {
        user: {
          ...initialState.user,
          loading: true,
          success: false,
          error: '',
        },
      });
      return await userService
        .postGetUser('getUser')
        .pipe(
          catchError((err) => {
            patchState(store, {
              user: {
                ...initialState.user,
                loading: false,
                success: false,
                error: err.error.message,
              },
            });
            return throwError(err);
          }),
          tap((user: User) => {
            return patchState(store, {
              user: {
                ...user,
                loading: false,
                success: true,
                error: '',
              },
            });
          })
        )
        .subscribe();
    },
    resetCreated() {
      patchState(store, () => ({
        createUser: {
          loading: false,
          success: false,
          error: '',
        },
      }));
    },
    addValidUser(user: User) {
      console.log('teaaa')
      patchState(store, {
        user: {
          ...user,
          loading: false,
          success: true,
          error: '',
        },
      });
    }
  }));
}
