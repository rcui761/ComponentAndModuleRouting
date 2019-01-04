import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'Home',
        loadChildren: './home-page/home-page.module#HomeModule',
      },
      {
        path: 'Language',
        loadChildren: './language-page/language-page.module#LanguageModule',
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
