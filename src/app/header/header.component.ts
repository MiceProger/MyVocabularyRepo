import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //@Output() public logOut:EventEmitter<void> = new EventEmitter<void>();
  public currentUser?:User;

  constructor( private userService:UserService) { 
    this.userService.user.subscribe((user:User) => {
      this.currentUser = user; 
      document.getElementById("userIcon")!.style.visibility = "visible"
      console.log(document.getElementById("userIcon"))
    },
     ()=>{
       this.currentUser = undefined, 
      document.getElementById("userIcon")!.style.visibility = "hidden" 
      console.log(document.getElementById("userIcon"));
     }
     ) 
  }

  logout(): void {
    this.userService.logout();
  }

}
