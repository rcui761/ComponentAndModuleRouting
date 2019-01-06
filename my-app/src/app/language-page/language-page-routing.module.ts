import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagePageDetailComponent} from './language-page-detail/language-page-detail.component';
import { LanguageEnglishDetailComponent} from './language-english-detail/language-english-detail.component';
import { LanguageChineseDetailComponent} from './language-chinese-detail/language-chinese-detail.component';

const routes: Routes = [
    {
        path: '',
        component: LanguagePageDetailComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: 'English',
                        component: LanguageEnglishDetailComponent
                    },
                    {
                        path: 'Chinese',
                        component: LanguageChineseDetailComponent
                    }

                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LanguagePageRoutingModule { }
