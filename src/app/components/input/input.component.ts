import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  @Input() label: string = '';
  @Input() id: string;
  @Input() form: FormGroup;
  @Input() campo: string;
  @Input() placeholder: string;
  @Input() type: string = 'text';
  @Input() opcional: boolean = false;

  constructor(private fb: FormBuilder) {
    this.placeholder = '';
    this.form = this.fb.group({});
    this.campo = '';
    this.id = '';
    this.label = '';
  }
  ngOnInit(): void {}
}
