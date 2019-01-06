import { Component, OnInit, Injector, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-country-page-detail',
    templateUrl: './country-page-detail.component.html',
    styleUrls: ['./country-page-detail.component.css']
})

export class CountryPageDetailComponent implements OnInit {
    Countries: Country[] = [
        { id: 1, name: 'New Zealand' },
        { id: 2, name: 'China' },
    ];

    constructor() {

        console.log(this.Countries[1].id);
    }

    ngOnInit() {
    }

}

export class Country {
    id: number;
    name: string;
}
