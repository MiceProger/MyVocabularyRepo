import { Component, Input, OnInit, QueryList } from '@angular/core';
import { VocabularyWord } from '../../../vocabularyWord';
import { WordItemComponent } from '../word-item/word-item.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Input() public wordItemComponents: QueryList<WordItemComponent>;
  
  constructor() { }

  ngOnInit(): void {
  }

  public search(searchText: string){

    this.wordItemComponents.forEach((wordItem: WordItemComponent) => {
      wordItem.display = "block"
    })
    
    if(searchText === "") return;
    
    this.wordItemComponents.forEach((wordItem: WordItemComponent) => {

      if(!wordItem.singleWord.word.includes(searchText))
        wordItem.display = "none"
    }) 
  }

}
