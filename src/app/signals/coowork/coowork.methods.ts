import { patchState, withMethods } from '@ngrx/signals';
import { inject } from '@angular/core';
import { CooworkService } from '../../services/coowork.service';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { getAllDtoResponse } from '../../services/cooworks/dtos/getAll.dto.response';
import { initialState } from './coowork.state';
import { cooworkDetails } from '../../models/coowork-details';

export function CooworkMethods() {
  return withMethods((store, cooworkService = inject(CooworkService)) => ({
    getAll(): Observable<getAllDtoResponse[]> {
      patchState(store, {
        cooworkList: {
          loading: true,
          error: '',
          success: false,
          cooworks: [],
        },
      });
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
                cooworks: cooworks.map((coowork) => {
                  return {
                    ...initialState.cooworkList.cooworks[0],
                    ...coowork,
                  };
                }),
              },
            });
          })
        );
    },
    async getById(id: number) {
      patchState(store, {
        cooworkList: {
          loading: true,
          error: '',
          success: false,
          cooworks: [],
          cooworkDetails: {}
        },
      });

      return cooworkService
      .getById(id)
      .pipe(
        catchError((err) => {
          patchState(store, {
            cooworkList: {
              loading: true,
              error: '',
              success: false,
              cooworks: [],
              cooworkDetails: {}
            },
          });
          return throwError(err);
        }),
        tap((cooworkDetail: cooworkDetails) => {
          return patchState(store, {
            cooworkList: {
              loading: false,
              error: '',
              success: true,
              cooworks: [],
              cooworkDetails: cooworkDetail
            },
          });
        })
      )
      .subscribe();
    },
    resetCooworks() {
      patchState(store, {
        cooworkList: {
          loading: false,
          error: '',
          success: false,
          cooworks: [],
          cooworkDetails: {}
        },
      });
    }
  }));
}


