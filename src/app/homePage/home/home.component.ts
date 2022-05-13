import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public registrationLink:string= "/vocabularyWords";

  @Output() public onNavigate: EventEmitter<string> = new EventEmitter();

  constructor() { }

}
