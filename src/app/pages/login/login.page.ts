import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ApplicationManagerService } from 'src/app/services/application-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string =''
  password: string=''

  constructor(private _authService :AuthService, private _router:Router) {

   }

  ngOnInit() {
  }
  login(){
    this._authService.login(this.username, this.password)
    this._router.navigate(['/home'])
  }


}
