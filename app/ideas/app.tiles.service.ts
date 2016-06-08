import {Directive, Injectable} from '@angular/core';
import {Http, Response, Headers, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

//common
import { AppConfigService } from '../app.config.service';
import {TsHelper} from '../common/utils/tsHelper';

import { Tile } from '../common/tiles/tile';
import { Tiles } from '../common/tiles/tiles';

import {IDataService} from '../common/data/idata.service';

@Injectable()
export class AppTilesService implements IDataService {
    
  
    //identification
    nameId: string = "Default";
  
    //items observable, can subscribe to, to get updates.  
    items$: Observable<Array<any>>;
    itemsObserver: Tile;
    items: Array<Tile>;
    dataStore: {
        items: Array<Tile>
    };

    //selection  
    selectItem: any;
    selectionChange$: Observable<any>;
    selectionObserver: any;    
       // public selectedItems: Array<System>;

    //container
    containerControl: Object;  


    private token: string;
    private error: string;
    private postResponse: string;
    private baseUrl: string = "https://" + this.getHostServerIp() + this.getHostServerPort();
    private systemUrlPart: string = "/SMAMain/api/system";
  //  private updateBewlMetaUrlPart: string = "/SMAMain/api/updateBewlMetaData";

    private systemId = "";
    private url: string;

  //  constructor(private http: Http, private _gridService: GridService) {
   constructor(private http: Http, private appConfigService: AppConfigService) {
        this.http = http;
        this.items = new Array<Tile>();
     //   this.items$ = new Observable((observer: any) => {
     //       this.itemsObserver = observer;
     //   }).share();
        this.dataStore = { items: [] };

        this.selectionChange$ = new Observable((observer: any) => {
            this.selectionObserver = observer;
        }).share();

        // this.selectedItems = new Array<System>();
    }

    getItems() {

        let data = this.mockData();
        this.dataStore.items = data;
      //  this.itemsObserver.next(this.dataStore.items);
    
    }

    //future read from json file like appConfig...
  
    getItemsFuture() {
        this.url = this.baseUrl + this.systemUrlPart;
        let token = localStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        //mock start
       // this.dataStore.items = this.mockData();
      //  this.itemsObserver.next(this.dataStore.items);
        //mock end
        //save for future
        
        // this.http.get(this.url, { headers: headers }).map(response => response.json()).subscribe(data => {
        //     this.dataStore.items = data;
        //     this.itemsObserver.next(this.dataStore.items);
        // }, error => console.log('Could not load system headers.'));
    }

    getItem(_systemId: string) {
        this.systemId = _systemId;
        this.url = this.baseUrl + this.systemUrlPart + "//" + this.systemId;
        let token = localStorage.getItem('id_token');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        
        // this.http.get(this.url, { headers: headers }).map(response => response.json()).subscribe(data => {
        //     this.dataStore.items = data.Members;
        //     this.itemsObserver.next(this.dataStore.items);
        // }, error => console.log('Could not load todos.'));
    }

    postItem(postData: string) { };



    selectionObserverInit() {
        this.selectionChange$ = new Observable((observer: any) => {
            this.selectionObserver = observer;
        }).share();
    }

    selectionChanged(item: Object) {
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

    getHostServerIp() {
        return this.appConfigService.getServerIp();
    }
    getHostServerPort() {
        return this.appConfigService.getServerPort();
    }


    mockData() {
        var data:any = ([
              { "Name": "Systems", "imageUrl": "../assets/img/systems-lg.png", "routeName": "Systems", "description": "System description" },
              { "Name": "Bewls", "imageUrl": "../assets/img/Lists-lg.png", "routeName": "Bewls", "description": "Bewls  description" },
              { "Name": "Alerts", "imageUrl": "../assets/img/alarms-lg.png", "routeName": "Alerts", "description": "Alerts description" },
              { "Name": "Import", "imageUrl": "../assets/img/sma_logo-lg.png", "routeName": "Import", "description": "Import description" },
              { "Name": "Help", "imageUrl": "../assets/img/help-red-lg.png", "routeName": "Help", "Help description": "Help description" },
              { "Name": "App Ideas Home", "imageUrl": "../assets/img/bewlList1.png", "routeName": "Ideas", "App Ideas Home description": "x6 description" },
  
        ]);

        return data;
    }

}

