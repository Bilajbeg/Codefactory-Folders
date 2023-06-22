import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'navbar';

  counter: number = 0;

  countClick() {
    this.counter = this.counter + 10;
  }
}
