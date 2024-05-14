import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-return',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar-return.component.html',
  styleUrl: './nav-bar-return.component.scss'
})
export class NavBarReturnComponent {
  @Input() title: string = "";

  constructor(private router: Router) { }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
