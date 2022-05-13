import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { VocabularyWord } from '../../../vocabularyWord';



@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Output() onAddWord: EventEmitter<VocabularyWord> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onAdd(addForm: NgForm){
    this.onAddWord.emit(addForm.value);
  }

  open(modal: any){
    this.modalService.open(modal);
  }

}
