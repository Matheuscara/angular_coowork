import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-input-mask',
  standalone: true,
  imports: [InputMaskModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-mask.component.html',
  styleUrl: './input-mask.component.scss',
})
export class InputMaskComponent {
  @Input() label: string;
  @Input() id: string;
  @Input() campo: string;
  @Input() placeholder: string;
  @Input() opcional: boolean = false;
  @Input() mask: string = '';
  @Input() form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.placeholder = '';
    this.form = this.fb.group({});
    this.campo = '';
    this.id = '';
    this.label = '';
  }
  
  ngOnInit(): void {}
}
