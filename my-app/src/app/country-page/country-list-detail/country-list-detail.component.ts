import { Component, OnInit, Injector, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-country-list-detail',
    templateUrl: './country-list-detail.component.html',
    styleUrls: ['./country-list-detail.component.css']
})

export class CountryListComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }
    back() {
        this.router.navigate(['./Country']);
    }

}

