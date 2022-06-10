import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './homePage/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VocabularyPageComponent } from './vocabularyPage/vocabulary-page/vocabulary-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'vocabularyWords', component: VocabularyPageComponent, canActivate:[AuthGuard]},
  {path: 'logIn', component:LoginComponent },
  {path: 'signUp', component:SignUpComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { 

  constructor(private router:Router) {
  }
}
