import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { WordService } from '../word.service';
import { WordsComponent } from './vocabularyPageElements/words/words.component';
import { WordItemComponent } from './vocabularyPageElements/word-item/word-item.component';
import { AddButtonComponent } from './vocabularyPageElements/add-button/add-button.component';
import { SitesPaneComponent } from './vocabularyPageElements/sites-pane/sites-pane.component';
import { VocabularyPageComponent } from './vocabulary-page/vocabulary-page.component';
import { TopNavComponent } from './vocabularyPageElements/top-nav/top-nav.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

@NgModule({ 
  declarations: [
    
    
  ],
  imports: [
    CommonModule, BrowserModule,
    HttpClientModule,  FormsModule, NgbModule
  ],
  providers: [WordService]
  
})
export class VocabularyPageModule { }
 