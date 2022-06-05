import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() public logOut:EventEmitter<void> = new EventEmitter<void>();

  constructor() {  }

  logout(): void {
    this.logOut.emit();
  }

}