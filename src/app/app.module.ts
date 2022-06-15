import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { VocabularyPageComponent } from './vocabularyPage/vocabulary-page/vocabulary-page.component';
import { AddButtonComponent } from './vocabularyPage/vocabularyPageElements/add-button/add-button.component';
import { SitesPaneComponent } from './vocabularyPage/vocabularyPageElements/sites-pane/sites-pane.component';
import { TopNavComponent } from './vocabularyPage/vocabularyPageElements/top-nav/top-nav.component';
import { WordItemComponent } from './vocabularyPage/vocabularyPageElements/word-item/word-item.component';
import { WordsComponent } from './vocabularyPage/vocabularyPageElements/words/words.component';
import { HomeComponent } from './homePage/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WordService } from './word.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* @Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
} */

@NgModule({ 
  declarations: [
    
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    SitesPaneComponent,
    VocabularyPageComponent,
    WordsComponent,
    WordItemComponent ,
    AddButtonComponent,
    SitesPaneComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule, CommonModule,
    AppRoutingModule, 
    HttpClientModule,  FormsModule, NgbModule, BrowserAnimationsModule, MatProgressSpinnerModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
