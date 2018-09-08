import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  username;
  password;

  constructor (private router: Router) {
    this.router.navigateByUrl('/login');
  }

  public goto_page(screen_id) {
    switch (screen_id) {
      case 1:
        this.router.navigateByUrl('/map');
        break;
      case 2:
        this.router.navigateByUrl('/record');
        break;
      case 3:
        this.router.navigateByUrl('/redeem');
        break;
      case 4:
        this.router.navigateByUrl('/settings');
        break;
    }
  }
}
