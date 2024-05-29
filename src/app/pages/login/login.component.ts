import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SeparateComponent } from '../../components/separate/separate.component';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { setAccessToken, showAlert } from '../../utils/utils';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { UserService } from '../../services/user.service';
import { LoginDtoResponse } from '../../services/user/dtos/login.dto.response';

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
  readonly userService = inject(UserService);
  public loading = signal(false);

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
  }

  login() {
    this.loading.set(true);
    this.userService
      .postLogin({
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe(
        (response: LoginDtoResponse) => {
          this.userService.accessToken = response.accessToken;
          setAccessToken(response.accessToken);
          this.loading.set(false);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.loading.set(false);
          this.form.reset();
          showAlert(
            'error',
            'Error',
            error.error.message,
            this.messageService
          );
        }
      );
  }

  redirectRegisterAcount() {
    this.router.navigate(['/register-account']);
  }
}
