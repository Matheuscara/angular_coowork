import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SeparateComponent } from '../../components/separate/separate.component';
import { Router } from '@angular/router';
import { UserStore } from '../../signals/user/user.state';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { showAlert } from '../../utils/utils';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    SeparateComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    ProgressBarModule,
    ToastModule,
  ],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly userStore = inject(UserStore);

  form: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        },
      ],

      password: [
        '',
        {
          validators: [Validators.required, Validators.minLength(8)],
          updateOn: 'blur',
        },
      ],
    });

    effect(() => {
      if (this.userStore.login().success) {
        this.router.navigate(['/home']);
      }

      if (this.userStore.login().error) {
        this.form.reset();
        showAlert(
          'error',
          'Error',
          this.userStore.login().error,
          this.messageService
        );
      }
    });
  }

  login() {
    this.userStore.postLogin({
      email: this.form.value.email,
      password: this.form.value.password,
    });
  }

  redirectRegisterAcount() {
    this.router.navigate(['/register-account']);
  }
}
