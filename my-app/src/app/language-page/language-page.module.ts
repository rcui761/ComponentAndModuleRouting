import { NgModule } from '@angular/core';
import { LanguagePageRoutingModule } from './language-page-routing.module';
import { CommonModule } from '@angular/common';
import { LanguageEnglishDetailComponent} from './language-english-detail/language-english-detail.component';
import { LanguagePageDetailComponent } from './language-page-detail/language-page-detail.component';
import { LanguageChineseDetailComponent} from './language-chinese-detail/language-chinese-detail.component';
import { from, fromEventPattern } from 'rxjs';

@NgModule({
    imports: [
        CommonModule,
        LanguagePageRoutingModule
    ],
    declarations: [
        LanguageEnglishDetailComponent,
        LanguagePageDetailComponent,
        LanguageChineseDetailComponent
    ]
})
export class LanguageModule { }
