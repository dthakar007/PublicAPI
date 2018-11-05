import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class IndexDataService {
    connectLocalURL: string = 'http://localhost:4200/';
    connectLocalPath: string = 'assets/data/'

    connectPublicApiURL: string = 'https://api.publicapis.org/entries?';

    indexData: Array<any>;

    constructor(private http: Http) { }
    getCategoryData(): Observable<any> {
        return this.http
                    .get(this.connectLocalURL + this.connectLocalPath + 'public-data.json')
                    .map((res:Response) => res.json());
    }

    getAuthData(): Observable<any> {        
        return this.http
                    .get(this.connectLocalURL + this.connectLocalPath + 'auth-data.json')
                    .map((res:Response) => res.json());
    }

    getHttpsData(): Observable<any> {        
        return this.http
                    .get(this.connectLocalURL + this.connectLocalPath + 'https-data.json')
                    .map((res:Response) => res.json());
    }

    getCorsData(): Observable<any> {        
        return this.http
                    .get(this.connectLocalURL + this.connectLocalPath + 'cors-data.json')
                    .map((res:Response) => res.json());
    }

    getPublicApiData(connectPublicApiSelection): Observable<any> {
        return this.http
                    .get(this.connectPublicApiURL + connectPublicApiSelection)
                    .map((res:Response) => res.json());
    }

}