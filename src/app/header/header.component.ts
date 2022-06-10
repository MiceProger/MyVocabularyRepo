import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() public logOut:EventEmitter<void> = new EventEmitter<void>();
  public currentUser:User = this.userService.userValue;

  constructor( private userService:UserService) {  }

  click(){
    console.log("click");
    
  }

  logout(): void {
    this.logOut.emit();
  }

}
