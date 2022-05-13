import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites-pane',
  templateUrl: './sites-pane.component.html',
  styleUrls: ['./sites-pane.component.css']
})
export class SitesPaneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public goToLink(mode: string): void{
    var userInput = (<HTMLInputElement>document.getElementById('search_input')).value;
    if(mode === 'Oxford'){
        window.open('https://www.oxfordlearnersdictionaries.com/definition/american_english/' + userInput);
    }
    if(mode === 'Google'){
        window.open('https://translate.google.com/?sl=en&tl=uk&text='+ userInput +'&op=translate');
    }
    if(mode === 'Reverso'){
        window.open('https://context.reverso.net/translation/english-russian/'+ userInput);
    }
}

}
