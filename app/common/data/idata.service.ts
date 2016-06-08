import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

export interface IDataService {

    //crud
    getItems(): void;
    getItem(id: any): void;
    postItem(postData: string): void;

    getHostServerIp(): string;
    getHostServerPort(): string;

    //identification
    nameId: string;
    selectionChanged(item: any): void;
    selectedItem(): any;
  
    //items observable, can subscribe to, to get updates.  
    items$: Observable<Array<any>>;
    itemsObserver: any;
    items: Array<any>;
    dataStore: {
        items: Array<any>
    };

    //selection  
    selectItem: any;
    selectionChange$: Observable<any>;
    selectionObserver: any;    

    //container
    containerControl: Object;   

 }


