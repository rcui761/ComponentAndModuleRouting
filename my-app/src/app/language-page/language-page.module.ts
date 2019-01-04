import { NgModule } from '@angular/core';
import { LanguagePageRoutingModule } from './language-page-routing.module';
import { CommonModule } from '@angular/common';
import { LanguagePageListComponent } from './language-page-list/language-page-list.component';
import { LanguagePageDetailComponent } from './language-page-detail/language-page-detail.component';
import { from } from 'rxjs';

@NgModule({
    imports: [
        CommonModule,
        LanguagePageRoutingModule
    ],
    declarations: [LanguagePageListComponent,
        LanguagePageDetailComponent
    ]
})
export class LanguageModule { }
