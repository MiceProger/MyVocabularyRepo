import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  public currentUser?:User;

  display:string;

  constructor( private userService:UserService, private renderer:Renderer2) {}

  @ViewChild("userImg") private userImg:ElementRef;
  ngAfterViewInit(): void {
    this.userService.user.subscribe((user:User) => {
      console.log("UserSubject has changed with : " + user)
      this.currentUser = user; 
      if(user) this.display = "block"
      else this.display = "none"
    }
    ); 
  }

  logout(): void {
    this.userService.logout();
  }

}
