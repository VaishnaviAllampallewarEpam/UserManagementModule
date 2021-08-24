import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms01';

  constructor(private route: Router) {}
  
  login() {
    this.route.navigate(['login']);
  }
  registration() {
    this.route.navigate(['registration']);
  }
}
