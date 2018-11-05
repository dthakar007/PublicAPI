import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

import { Http } from '@angular/http';
import { IndexDataService } from '../service/index-data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { HomePageGridComponent } from './home-page-grid/home-page-grid.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    providers: [IndexDataService]
})
export class HomePageComponent implements OnInit {
    homePageForm: FormGroup;
    ddlCategory: any;
    ddlAuth: any;
    ddlHttps: any;
    ddlCors: any;
    categoryValues: any = [];
    authValues: any = [];
    httpsValues: any = [];
    corsValues: any = [];
    gridData: any
    headerNames: string[];
    submitClicked: boolean = false;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private indexDataService: IndexDataService
    ) {}

    ngOnInit(): void {
        this.createForm();
        this.getCategoryData();
        this.getAuthData();
        this.getHttpsData();
        this.getCorsData();
    }

    createForm() {
        // This is Reactive Form
        this.homePageForm = this.formBuilder.group({
            //ddlIndex: this.ddlIndex
            ddlCategory: new FormControl('', Validators.required),
            ddlAuth: new FormControl(''),
            ddlHttps: new FormControl(''),
            ddlCors: new FormControl('')
        })
    }

    getCategoryData() {
        this.indexDataService.getCategoryData().subscribe(result => {
            this.categoryValues = result.map(element => ({
                Id: element.id,
                Value: element.index
            }));
        });
        
    }

    getAuthData() {
        this.indexDataService.getAuthData().subscribe(result => {
            this.authValues = result.map(element => ({
                Id: element.id,
                Value: element.name
            }));
        });

    }

    getHttpsData() {
        this.indexDataService.getHttpsData().subscribe(result => {
            this.httpsValues = result.map(element => ({
                Id: element.id,
                Value: element.name
            }));
        });
    }

    getCorsData() {
        this.indexDataService.getCorsData().subscribe(result => {
            this.corsValues = result.map(element => ({
                Id: element.id,
                Value: element.name
            }));
        });
    }

    onSubmit() {
        debugger;
        this.submitClicked = true;
        //console.log(this.homePageForm.value, this.homePageForm.valid);
        let publicApiPath: string;
        publicApiPath = "category=" + encodeURIComponent(this.homePageForm.value.ddlCategory);
        if (this.homePageForm.value.ddlAuth) {
            publicApiPath += "&auth=" + this.homePageForm.value.ddlAuth;
        }
        if (this.homePageForm.value.ddlHttps) {
            publicApiPath += "&https=" + (this.homePageForm.value.ddlHttps=="Yes"?true:false);
        }
        if (this.homePageForm.value.ddlCors) {
            publicApiPath += "&cors=" + this.homePageForm.value.ddlCors;
        }

        debugger;
        this.indexDataService.getPublicApiData(publicApiPath).subscribe(result => {
            debugger;
            this.headerNames = [];
            this.gridData = null;

            if (result.count > 0) {
                this.gridData = result.entries;

                // let count = Object.keys(this.gridData.entries[0]).length;
                this.headerNames = Object.keys(this.gridData[0]);
            }
        });

    }


}