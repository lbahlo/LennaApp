
import {Directive, Injectable} from '@angular/core';
import {Http, Response, Headers, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
//import { AppConfigService } from '../../app.config.service';
import {TsHelper} from '../../common/utils/tsHelper';
import {ErrorCode} from '../../common/utils/errorCode';

import {IDataService} from './idata.service';

@Injectable()
//export class DataService implements IDataService {
export class DataService {

    //identification
    nameId: string;
 
    //items observable, can subscribe to, to get updates.  
    public items$: Observable<Array<any>>;
    public itemsObserver: any;
    public items: Array<any>;
    public dataStore: {
        items: Array<any>
    };
 
    //selection  
    selectItem: any;
    selectionChange$: Observable<any>;
    selectionObserver: any; 

    //container
    containerControl: Object;
    
    private token: string;
    private errorCode: ErrorCode;
    private isError: boolean = false;
    public url: string;
    public baseType: string;


   // private baseUrl: string = "https://" + this.getServerIp() + this.getServerPort() + "/SMAMain/api/addBewlSystemMapping";
   // private url: string;
    private apiResponse: any;

    // constructor(private http: Http,
    //     private appConfigService: AppConfigService) {

    constructor(private http: Http) {
        this.http = http;
        this.items = new Array<string>();
        // this.items$ = new Observable((observer: any) => {
        //     this.itemsObserver = observer;
        // }).share();
        this.dataStore = { items: [] };

        this.selectionChange$ = new Observable((observer: any) => {
            this.selectionObserver = observer;
        }).share();

    }
      
    getHostServerIp() {
       // return this.appConfigService.getServerIp();
    }

    getHostServerPort() {
       // return this.appConfigService.getServerPort();
    }

    //crud
    getItems() {
    //    // this.url = this.baseUrl + this.systemUrlPart;
    //     let token = localStorage.getItem('id_token');
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', 'Bearer ' + token);
    //     this.http.get(this.url, { headers: headers }).subscribe((response: any) => {
    //         this.apiResponse = this.extractData(response);
    //         this.dataStore.items = this.apiResponse;
    //         this.itemsObserver.next(this.dataStore.items);
    //     }, error => console.log(this.apiResponse));
    }


    getItem(id: any) {
        // this.url +=  "//" + id;
        // let token = localStorage.getItem('id_token');
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + token);
        // this.http.get(this.url, { headers: headers }).subscribe((response: any) => {
        //     this.apiResponse = this.extractData(response);
        //     this.dataStore.items = this.apiResponse;
        //     this.itemsObserver.next(this.dataStore.items);
        // }, error => console.log(this.apiResponse));

    }

    postItem(postData: string) {
   
        // let token = localStorage.getItem('id_token');
        // let headers = new Headers();
            
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + token);
 
        // return this.http.post(this.url, postData, { headers: headers }).subscribe((response: any) => {
        //     this.apiResponse = this.extractData(response);
        //     if (this.isError) {
        //         this.dataStore.items = this.apiResponse;
        //         this.itemsObserver.next(this.dataStore.items);   //trigger error notification to any subscribers
        //     }

        // }, error => console.log(this.apiResponse));

    }
       
    //Selection 
    selectionObserverInit() {
        this.selectionChange$ = new Observable((observer: any) => {
            this.selectionObserver = observer;
        }).share();
    }
    selectionChanged(item: any) {
        this.selectItem = item;
        //  if ((this.selectionObserver !== null) || (this.selectionObserver !== undefined)) {
        if (this.selectionObserver !== undefined) {
            this.selectionObserver.next(item);
        }
        else {
            this.selectionObserverInit();
        }
    }
    selectedItem() {
        return this.selectItem;
    }
   
    selectedItems() {
        return this.dataStore.items.filter((item: any) => item.active);
    }

    private extractData(res: Response) {
        this.isError = false;  //reset
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();

        if (TsHelper.IsNull(this.errorCode))
            this.errorCode = new ErrorCode();

        if (this.errorCode.isError(body)) {
            this.isError = true;
            let errCode = this.errorCode.transform(body);
            let errMsg = "ERROR  = " + errCode + " FROM API - " + res.url;
            return errMsg;
            //return Observable.throw(errMsg);
        }
        return body.data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        //  let errMsg = error.message || 'Server error';
        let errMsg = error || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


}