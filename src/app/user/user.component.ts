import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  messg!:string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.forUser();
  }

  forUser(){
    this.userService.forUser().subscribe(
      (response)=>{
        console.log(response)
        this.messg=response;
      },(error)=>{
        console.log(error);
      }
    )
  }

}
