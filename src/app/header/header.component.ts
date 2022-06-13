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
      if(user) document.getElementById("userIcon")!.style.display = "noneblock"
      else document.getElementById("userIcon")!.style.display = "none"
    }
    ); 
  }

  logout(): void {
    this.userService.logout();
  }

}
