import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from '@angular/core';
import { VocabularyWord } from '../../../vocabularyWord';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-word-item',
  templateUrl: './word-item.component.html',
  styleUrls: ['./word-item.component.css']
})
export class WordItemComponent implements AfterViewInit{
  @Input() public singleWord: VocabularyWord;
  @Output() public onDeleteWord: EventEmitter<VocabularyWord> = new EventEmitter();
  @Output() public onEditWord: EventEmitter<VocabularyWord> = new EventEmitter();
  @Output() public onStarToggle: EventEmitter<this> = new EventEmitter();
  public starIconFull: any;
  public starIconEmpty: any;
  public display: string ='block' ;

  constructor(private modalService: NgbModal, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    console.log("Inside AfterViewInit()");
    
    this.createStarIcons();
  }
  

  ngOnInit(): void {console.log("This is word item componenet with this word: ",this.singleWord);}

  onDelete(){this.onDeleteWord.emit(this.singleWord);}

  onEdit(word: VocabularyWord){
    console.log("My new word : "+ word);
    word.formattedDate = this.singleWord.formattedDate;
    word.id = this.singleWord.id;
    word.username = this.singleWord.username;

    this.onEditWord.emit(word);
  }

  open(modal: any){this.modalService.open(modal); }

  @ViewChild("starIcon") public iconContainer : ElementRef;
  private createStarIcons() {

    console.log("Inside createStarIcons2 with this input :", this.iconContainer);
    
    this.starIconFull = this.renderer.createElement('i');
    this.renderer.setAttribute( this.starIconFull, "class", "bi bi-star-fill");
    this.renderer.setAttribute(this.starIconFull, "id", "full-star");
    this.renderer.listen(this.starIconFull, "click", () => {this.onStarToggle.emit(this)})

    this.starIconEmpty = this.renderer.createElement('i');
    this.renderer.setAttribute( this.starIconEmpty, "class", "bi bi-star");
    this.renderer.setAttribute(this.starIconEmpty, "id", "empty-star");
    this.renderer.listen(this.starIconEmpty, "click", () => {this.onStarToggle.emit(this)})

    if(this.singleWord.special) {
        this.renderer.appendChild(this.iconContainer.nativeElement, this.starIconFull  );
        console.log("child appended in container ", this.iconContainer);
        
    }
    else this.renderer.appendChild(this.iconContainer.nativeElement, this.starIconEmpty);
  }

}
