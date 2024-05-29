import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { SeparateComponent } from '../../components/separate/separate.component';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskComponent } from '../../components/input-mask/input-mask.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { validateCpf, validatePhoneNumber } from '../../utils/validators';
import { showAlert } from '../../utils/utils';
import { ProgressBarModule } from 'primeng/progressbar';
import { UserService } from '../../services/user.service';

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
    CalendarModule,
    InputTextModule,
    InputMaskComponent,
    ToastModule,
    ProgressBarModule,
  ],
  providers: [MessageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register-account.component.html',
  styleUrl: './register-account.component.scss',
})
export class RegisterAccountComponent implements OnInit {
  readonly userService = inject(UserService);
  public loading = signal(false);

  form: FormGroup = new FormGroup({});
  alert: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      firstName: [
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],

      lastName: [
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

      birthDate: [
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],

      empresa: [
        '',
        {
          validators: [],
          updateOn: 'blur',
        },
      ],

      cpf: [
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],

      phoneNumber: [
        '',
        {
          validators: [Validators.required],
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

      passwordConfirmation: [
        '',
        {
          validators: [Validators.required, Validators.minLength(8)],
          updateOn: 'blur',
        },
      ],
    });

    // effect(() => {
    //   if (this.userService.postCreateUser().success) {
    //     this.router.navigate(['/login']);
    //   }

    //   if (this.store.createUser().error) {
    //     showAlert(
    //       'error',
    //       'Error',
    //       this.store.createUser().error,
    //       this.messageService
    //     );
    //   }
    // });
  }

  ngOnInit(): void {
    this.form.reset();
  }

  validationCreateUser(form: any) {
    if (!validateCpf(form.cpf)) {
      this.form.get('cpf')?.setErrors({ invalid: true });
      throw new Error('Cpf invalid.');
    }

    if (!validatePhoneNumber(form.phoneNumber)) {
      this.form.get('phoneNumber')?.setErrors({ invalid: true });
      throw new Error('Phone invalid.');
    }

    if (form.password !== form.passwordConfirmation) {
      this.form.get('password')?.setErrors({ invalid: true });
      this.form.get('passwordConfirmation')?.setErrors({ invalid: true });
      throw new Error('Passwords must be the same.');
    }

    Object.keys(form).forEach((key) => {
      if (form[key] === null || form[key] === '') {
        delete form[key];
      }
    });

    return form
  }

  submit() {
    this.loading.set(true);
    try {
      let form = this.form.getRawValue();

      form.image = '';

      form.phoneNumber = form.phoneNumber.replace(/\D/g, '');
      form.cpf = form.cpf.replace(/\D/g, '');
      form.birthDate = form.birthDate.toISOString().split('T')[0];

      form = this.validationCreateUser(form);

      this.userService.postCreateUser(form).subscribe(() => {
        this.loading.set(false);
        this.router.navigate(['/login']);
      });
    } catch (error: any) {
      showAlert('error', 'Error', error.message, this.messageService);
      this.loading.set(false);
    }
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }
}
