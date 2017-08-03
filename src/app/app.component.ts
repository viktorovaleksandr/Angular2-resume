import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Viktorov Alexander';
    contacts = ['Mobile: 0933791720', 'Skype: viktorov alexander'];
    skills = ['JavaScript', 'HTML 5', 'CSS 3 (SASS)', 'JQuery','Bootstrap', 'Angular 2','Node.js (Express)'];
}
