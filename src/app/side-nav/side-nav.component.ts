import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
    route: string;
    pageName = "HomePage";
    constructor(
        private location: Location,
        private router: Router
    ) { }
    ngOnInit() {
        this.router.events.subscribe((val) => {
            if (this.location.path() !== '') {
                this.route = this.location.path();
                const splitArr = this.route.split("/");
                const pageName = splitArr[1];
                this.activeMenu(pageName);
            }
        });    
    }
    activeMenu(page) {
        this.pageName = page;
    }
}