import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private login () {
    this.router.navigateByUrl('/map');
  }

  private register () {
    const message_box = document.getElementById('message-box');
    message_box.innerText = 'Not Implemented Yet!';
    message_box.classList.remove('hidden');
  }

}
