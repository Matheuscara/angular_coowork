import { patchState, withMethods } from '@ngrx/signals';
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';
import { tap, delay, catchError, throwError, finalize } from 'rxjs';
import { LoginDtoRequest } from '../../services/user/dtos/login.dto.request';
import { LoginDtoResponse } from '../../services/user/dtos/login.dto.response';
import { CreateUserDtoRequest } from '../../services/user/dtos/createUser.dto.request';
import { initialState } from './user.state';
import { UserState } from './states/user.state';
import { setAccessToken } from '../../utils/utils';
import { UserDtoRepsonse } from '../../services/user/dtos/getUser.dto.response';

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
      return userService
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
          finalize(() => {}),
          tap((user: LoginDtoResponse) => {
            userService.accessToken = user.accessToken;

            setAccessToken(user.accessToken);

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
    async getUser() {
      patchState(store, {
        user: {
          ...initialState.user,
          loading: true,
          success: false,
          error: '',
        },
      });
      return await userService
        .getUser()
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
          tap((user: UserDtoRepsonse) => {
            return patchState(store, {
              user: {
                ...user.user,
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
    addValidUser(user: UserState) {
      patchState(store, {
        user: {
          ...user,
          loading: false,
          success: true,
          error: '',
        },
      });
    },
    logout() {
      userService.accessToken = '';
      localStorage.removeItem('token');
      patchState(store, {
        user: {
          ...initialState.user,
        },
      });
    }
  }));
}
