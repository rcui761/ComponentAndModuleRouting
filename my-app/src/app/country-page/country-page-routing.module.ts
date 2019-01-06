import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryPageDetailComponent } from './country-page-detail/country-page-detail.component';
import { CountryListComponent} from './country-list-detail/country-list-detail.component';

const routes: Routes = [
    {
        path: 'Country',
        component: CountryPageDetailComponent,
    },
    {
        path: 'Country/:id',
        component: CountryListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountryPageRoutingModule { }
