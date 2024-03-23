import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { SeparateComponent } from '../../components/separate/separate.component';
import { UserStore } from '../../signals/user/user.state';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { exampleBody } from '../../services/user/dtos/createUser.dto.request';

@Component({
  selector: 'app-register-account',
  standalone: true,
  imports: [
    InputComponent,
    ButtonComponent,
    SeparateComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register-account.component.html',
  styleUrl: './register-account.component.scss',
})
export class RegisterAccountComponent {
  readonly store = inject(UserStore);

  form: FormGroup = new FormGroup({});

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      fullName: [
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],

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

      company: [
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
    });

    effect(() => {
      if (this.store.created()) {
        this.router.navigate(['/login']);
      }
    });
  }

  submit() {
    this.store.postCreateUser(exampleBody);
  }
}
