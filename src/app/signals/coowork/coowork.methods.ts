import { patchState, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { CooworkService } from '../../services/coowork.service';
import { catchError, tap, throwError } from 'rxjs';
import { getAllDtoResponse } from '../../services/cooworks/dtos/getAll.dto.request';

export function CooworkMethods() {
  return withMethods((store, cooworkService = inject(CooworkService)) => ({
    async getAll() {
      patchState(store, {
        cooworkList: {
          loading: true,
          error: '',
          success: false,
          cooworks: [],
        },
      });

      return setTimeout(() => {
        return cooworkService
        .getAll()
        .pipe(
          catchError((err) => {
            patchState(store, {
              cooworkList: {
                loading: false,
                error: '',
                success: false,
                cooworks: [],
              },
            });
            return throwError(err);
          }),
          tap((cooworks: getAllDtoResponse[]) => {
            return patchState(store, {
              cooworkList: {
                loading: false,
                error: '',
                success: true,
                cooworks: cooworks,
              },
            });
          })
        )
        .subscribe();
      }, 2000);
      
    },
  }));
}
