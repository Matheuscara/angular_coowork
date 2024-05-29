import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { CooworkService } from '../../services/coowork.service';
import { lastValueFrom } from 'rxjs';
import { cooworkDetails } from '../../models/coowork-details';
import { cooworkStateInitial } from './initialState';

@Injectable({
  providedIn: 'root',
})
export class CooworkDetailsSubjectService {
  private serviceCoowork = inject(CooworkService);
  private cooworkDetail$ = signal<cooworkDetails>(cooworkStateInitial);

  cooworkDetail = computed(() => this.cooworkDetail$());
  load = signal<boolean>(false);

  init = effect(() => {
    console.log('subject coowork details: ', this.cooworkDetail());
  });

  public async loadInitCooworkDetails(id: number): Promise<void> {
    if(this.cooworkDetail().id === id) return;
    const initCooworksDetails: cooworkDetails = await lastValueFrom(
      this.serviceCoowork.getById(id)
    );
    this.cooworkDetail$.update(() => initCooworksDetails);
    this.load.update(() => true);
  }
}
