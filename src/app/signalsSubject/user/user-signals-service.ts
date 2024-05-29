import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Injectable({
    providedIn: 'root',
})
export class UserSubjectService {
  private initialUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    cpf: '',
    image: '',
    phoneNumber: '',
  }
  private userService = inject(UserService);
  private user$ = signal<User>(this.initialUser);

  user = computed(() => this.user$());
  load = signal<boolean>(false);

  init = effect(() => {
    !this.load() && this.loadInitUser();
    console.log("subject user: ", this.user());
  });

  public async loadInitUser() {
    const initUser: User = await lastValueFrom(this.userService.getUser());
    this.user$.update(() => initUser);
    this.load.update(() => true);
  };

  public logout() {
    this.user$.update(() => this.initialUser);
  }
}
