import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public currentUser?:User;

  constructor( private userService:UserService) { 
    this.userService.user.subscribe((user:User) => {
      console.log("UserSubject has changed with : " + user)
      this.currentUser = user; 
      document.getElementById("userIcon")!.style.visibility = "visible"
    },
     ()=>{
      console.log("UserSubject has been cleared ")
       this.currentUser = undefined, 
      document.getElementById("userIcon")!.style.visibility = "hidden" 
      console.log("Hello :"+document.getElementById("userIcon"));
     }
     ); 
  }

  logout(): void {
    this.userService.logout();
  }

}
