import { GlobalService } from './services/global.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mcag';

  constructor(public global: GlobalService) {

  }
}
