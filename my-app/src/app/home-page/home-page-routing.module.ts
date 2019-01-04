import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageDetailComponent } from './home-page-detail/home-page-detail.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
