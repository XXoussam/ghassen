import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  messg!:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.forAdmin()
  }

  forAdmin(){
    this.userService.forAdmin().subscribe(
      (response)=>{
        console.log(response)
        this.messg=response;
      },(error)=>{
        console.log(error);
      }
    )
  }

}
