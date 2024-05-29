import { Coowork } from '../../models/coowork';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { CooworkService } from '../../services/coowork.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CooworkSubjectService {
  private serviceCoowork = inject(CooworkService);
  private allcooworks$ = signal<Coowork[]>([]);

  allcooworks = computed(() => this.allcooworks$());
  load = signal<boolean>(false);

  init = effect(() => {
    !this.load() && this.loadInitAllCooworks();
    console.log("subject coowork: ", this.allcooworks());
  });

  public async loadInitAllCooworks(): Promise<void> {
    const initCooworks: Coowork[] = await lastValueFrom(this.serviceCoowork.getAll());
    this.allcooworks$.update(() => initCooworks);
    this.load.update(() => true);
  };
}
