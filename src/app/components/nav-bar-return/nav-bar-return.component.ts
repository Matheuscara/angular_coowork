import { Component, Input, input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-bar-return',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar-return.component.html',
  styleUrl: './nav-bar-return.component.scss'
})
export class NavBarReturnComponent {
  share = input.required<boolean>();
  @Input() title: string = "";

  constructor(private location: Location) {}

  returnHome() {
    this.location.back();
  }
}
