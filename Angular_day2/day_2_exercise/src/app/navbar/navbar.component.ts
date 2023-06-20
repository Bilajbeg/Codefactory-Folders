import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  websiteTitle: string = "Car Rental";

  counter: number = 0;

  countClick() {
    this.counter = this.counter + 10;
  }
}

