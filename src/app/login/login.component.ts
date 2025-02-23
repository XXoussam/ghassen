import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../service/user.service";
import {UserAuthService} from "../service/user-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,
              private userAuthService:UserAuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    console.log(loginForm.value)
    this.userService.login(loginForm.value).subscribe(
      (response:any)=>{
        console.log(response)
        this.userAuthService.setRoles(response.user.roles)
        this.userAuthService.setToken(response.jwtToken)
        const role = response.user.roles[0].roleName;
        if (role === 'Admin'){
          this.router.navigate(["/admin"]);
        }else {
          this.router.navigate(["/user"]);
        }
      },error => {
        console.log(error);
      }
    );

  }
}
