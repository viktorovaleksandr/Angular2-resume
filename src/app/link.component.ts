import { Component } from '@angular/core';

@Component({
  selector: 'links',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
    linkGitHub = 'https://github.com/viktorovaleksandr';
    linkCodewars = 'https://codewars.com/users/viktorovaleksandr';
    linkLinkedin = 'https://www.linkedin.com/feed/';
}