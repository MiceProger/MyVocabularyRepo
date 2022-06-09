import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() public logOut:EventEmitter<void> = new EventEmitter<void>();
  public username:string = this.userService.userValue.username;

  constructor( private userService:UserService) {  }

  logout(): void {
    this.logOut.emit();
  }

}
