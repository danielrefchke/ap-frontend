import { Component } from '@angular/core';
import { socialmedia } from '../mock-socialmedia';

@Component({
  selector: 'footer',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.sass'],
})
export class FootbarComponent {
  socialmedia = socialmedia;
}
