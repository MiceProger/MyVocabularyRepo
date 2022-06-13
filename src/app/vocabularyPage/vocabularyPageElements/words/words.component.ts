import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { VocabularyWord } from '../../../vocabularyWord';
import { WordItemComponent } from '../word-item/word-item.component';
import { WordService } from '../../../word.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  public words: VocabularyWord[] = [];

  constructor(private wordService: WordService, private userService: UserService, private renderer: Renderer2){}

  //@ViewChildren("input-container") public inputContainer: ElementRef;

    ngOnInit(): void {
        console.log("Sheet initialisaiton");
        this.getWords();
    }

    public getWords(): void{
      console.log("Now I`m trying to fetch words from DB");
      
      this.wordService.getWords().subscribe(
          
          (response: VocabularyWord[]) => {
              console.log("Now , I`m in the front-end with response : ", response );
              this.words = response;
              
          },
          (error: HttpErrorResponse) => {
              console.log("Smth goes wrong. There is an error in getWords() ", error.message);
              
              alert(error.message);
          }
      );
    }

    public DeleteWord(word: VocabularyWord){
      document.getElementById('delete-close-add-button')?.click();
      this.wordService.deleteWord(word.id).subscribe(
          
          (response: void) => {
              console.log("Now , I`m in the front-end without response");
              this.getWords();
          },
          (error: HttpErrorResponse) => {
              console.log("Smth goes wrong. There is an error in deleteWords() ", error.message);
              
              alert(error.message);
          }
      );
  }

  public EditWord(word: VocabularyWord):void {
    console.log("Now I`m trying to update a word from DB");
    
    console.log("check parameter value : ", word);

    document.getElementById('close-edit-button')?.click();
    
    this.wordService.updateWord(word).subscribe(
        
        (response: VocabularyWord) =>{
            console.log("I get some data from form, make a request to back-end and get a response from it ", response);
            console.log("I`m trying to initialise my sheet");
            this.getWords();
        },
        (error: HttpErrorResponse) =>{
            console.log("Smth goes wrong. There is an error in onEditWord()", error.message);
            alert(error.message);
        }
      )
  }

  public AddWord(word: VocabularyWord){
    console.log("Now I`m trying to save a word to DB");
        
    console.log("check form value : ", word);

    word.username = this.userService.userValue.username;

    document.getElementById('close-add-button')?.click();
    console.log("Now I clicked on close button");

    
    this.wordService.addWord(word).subscribe(
        
        (response: VocabularyWord) =>{
            console.log("I get some data from form, make a request to back-end and get a response from it ", response);
            console.log("I`m trying to initialise my sheet");
            this.getWords();
        },
        (error: HttpErrorResponse) =>{
            console.log("Smth goes wrong. There is an error in onAddWords()", error.message);
            alert(error.message);
        }
    );
  }

  public StarToggle(wordItem: WordItemComponent){
      
    wordItem.singleWord.special = !wordItem.singleWord.special;
    this.EditWord(wordItem.singleWord);
    console.log("inside StarToggle() with this component:", wordItem.singleWord.special);

    /* if(wordItem.singleWord.special){
        this.renderer.removeChild(wordItem.iconContainer.nativeElement, wordItem.starIconEmpty);
        this.renderer.appendChild(wordItem.iconContainer.nativeElement, wordItem.starIconFull);
    }
    else{
        this.renderer.removeChild(wordItem.iconContainer.nativeElement, wordItem.starIconFull);
        this.renderer.appendChild(wordItem.iconContainer.nativeElement, wordItem.starIconEmpty);
    } */
  }
  
}
