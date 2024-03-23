import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() id: string;
  @Input() label: string;
  @Input() class: string ;
  @Input() disabled?: boolean = false;

  constructor() {
    this.id = '';
    this.label = '';
    this.class = '';
  }
}
