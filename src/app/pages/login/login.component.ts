import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly store = inject(UserStore);

  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder) {
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
      if (this.store.userConected()) {
        this.router.navigate(['/home']);
      }
    });
  }

  login() {
    this.store.postLogin({
      email: this.form.value.email,
      password: this.form.value.password,
    });
  }

  navegarParaOutraPagina() {
    console.log('navegarParaOutraPagina');
    this.router.navigate(['/register-account']);
  }
}
