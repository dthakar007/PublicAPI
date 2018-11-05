import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

import { Http } from '@angular/http';

@Component({
    selector: 'app-home-page-grid',
    templateUrl: './home-page-grid.component.html',
    styleUrls: ['./home-page-grid.component.css']
})
export class HomePageGridComponent implements OnInit {
    @Input() showData: any;
    @Input() fieldNames: string[];
    tableData: any;
    constructor() {}

    ngOnInit(): void {
        debugger;
        this.DisplayTable();
    }
    
    DisplayTable() {
        debugger;
        this.tableData = this.showData;
        //this.fieldNames = Object.keys(this.tableData[0]);
    }
    
}