import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CountryListComponent} from './country-list-detail/country-list-detail.component';
import { CountryPageDetailComponent} from './country-page-detail/country-page-detail.component';
import { CountryPageRoutingModule} from './country-page-routing.module';
import { from, fromEventPattern } from 'rxjs';

@NgModule({
    imports: [
        CommonModule,
        CountryPageRoutingModule
    ],
    declarations: [
        CountryListComponent,
        CountryPageDetailComponent
    ]
})
export class CountryModule { }

