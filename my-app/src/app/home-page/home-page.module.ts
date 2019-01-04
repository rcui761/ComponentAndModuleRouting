import { NgModule } from '@angular/core';
import { HomePageDetailComponent } from './home-page-detail/home-page-detail.component';
import { HomePageRoutingModule} from './home-page-routing.module';
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';

@NgModule({
    imports: [
        CommonModule,
        HomePageRoutingModule
    ],
    declarations: [HomePageDetailComponent]
})
export class HomeModule { }
