import {Directive, Injectable} from '@angular/core';
import {Http, Response, Headers, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from "rxjs/Rx";
import {Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

//common
//import { AppConfigService } from '../app.config.service';
import {TsHelper} from '../common/utils/tsHelper';
import {Project,IProject } from '../common/models/project';

import { IProjectTile, ProjectTile } from '../common/project-tiles/project.tile';
import { ProjectTiles } from '../common/project-tiles/project.tiles';

//import {IDataService} from '../common/data/idata.service';

@Injectable()
//export class AppTilesService implements IDataService {
    export class ProjectService {
  
    //identification
    nameId: string = "Default";
  
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
   //    constructor(private http: Http, private appConfigService: AppConfigService) {
   constructor(private http: Http) {
        this.http = http;
        this.items = new Array<IProject>();
        // this.items$ = new Observable((observer: any) => {
        //     this.itemsObserver = observer;
        // }).share();
        this.dataStore = { items: [] };

        this.selectionChange$ = new Observable((observer: any) => {
            this.selectionObserver = observer;
        }).share();

        // this.selectedItems = new Array<System>();
    }

    getItems() : Array<IProject> {

        this.items  = this.mockData();
        // this.dataStore.items = data;
        // this.itemsObserver.next(this.dataStore.items);
        return this.items;  
    
    }
    
    getSMAItems() : Array<ProjectTile> {

        this.items  = this.SMAData();
        // this.dataStore.items = data;
        // this.itemsObserver.next(this.dataStore.items);
        return this.items;  
    
    }
    
    getFIAPPItems() : Array<ProjectTile> {

        this.items  = this.FIAPPData();
        // this.dataStore.items = data;
        // this.itemsObserver.next(this.dataStore.items);
        return this.items;  
    
    }
    
    getDCAFItems() : Array<ProjectTile> {

        this.items  = this.DCAFData();
        // this.dataStore.items = data;
        // this.itemsObserver.next(this.dataStore.items);
        return this.items;  
    
    }

    getADIItems() : Array<ProjectTile> {

        this.items  = this.ADIData();
        return this.items;  
    
    }

    getTPMViewerItems() : Array<ProjectTile> {

        this.items  = this.TPMViewerData();
        return this.items;  
    
    }
    
    
    getExecVueItems() : Array<ProjectTile> {

        this.items  = this.ExecVueData();
        return this.items;  
    
    }
    
        
    getIAItems() : Array<ProjectTile> {

        this.items  = this.IAData();
        return this.items;  
    
    }

    //future read from json file like appConfig...
  
    getItemsFuture() {
    //     this.url = this.baseUrl + this.systemUrlPart;
    //     let token = localStorage.getItem('id_token');
    //     let headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', 'Bearer ' + token);
    //     //mock start
    //    // this.dataStore.items = this.mockData();
    //   //  this.itemsObserver.next(this.dataStore.items);
    //     //mock end
    //     //save for future
    //     this.http.get(this.url, { headers: headers }).map(response => response.json()).subscribe(data => {
    //         this.dataStore.items = data;
    //         this.itemsObserver.next(this.dataStore.items);
    //     }, error => console.log('Could not load system headers.'));
    }

    getItem(_systemId: string) {
        // this.systemId = _systemId;
        // this.url = this.baseUrl + this.systemUrlPart + "//" + this.systemId;
        // let token = localStorage.getItem('id_token');
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Bearer ' + token);
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
       // return this.appConfigService.getServerIp();
    }
    getHostServerPort() {
       // return this.appConfigService.getServerPort();
    }


   mockData() {
        
    // companyName:string;
    // name: string;
    // url: string;
    // image: string;
    // dates: string;
    // description: string;
    //routeName:string;
        
        var data:any = ([
    
              { "companyName": "Digital Signal Corporation", "name":"Digital Signal Corporation", "url": "build/assets/images/dsc/dsc-logo.png", "routeName": "DscPage", "description": "2/2013 - Present" },
              { "companyName": "IIT Excelis", "name":"IIT Excelis", "url": "build/assets/images/itt/itt-logo.png", "routeName": "ExcelisPage", "description": "4/2009 - 2/2013" },
              { "companyName": "Rockwell Collins", "name":"Rockwell Collins", "url": "build/assets/images/rockwell/rockwell-logo.png", "routeName": "RockwellPage", "description": "5/2004 - 4/2009" },
              { "companyName": "Digital Equipment Corporation", "name":"Digital Equipment Corporation", "url": "build/assets/images/digital/digital-logo.png", "routeName": "DigitalPage", "description": "6/1987 - 2/1997" },
              { "companyName": "Wang Laboratories", "name":"Wang Laboratories", "url": "build/assets/images/wang/wang-logo.png", "routeName": "WangPage", "description": "9/1983 - 6/1987" },
                
         ]);

        return data;
    }





  //sma projectsa
  SMAData() : Array<ProjectTile> {
        
    // companyName:string;
    // name: string;
    // url: string;
    // image: string;
    // dates: string;
    // description: string;
    //routeName:string;
        
        var data:any = ([
    
              { "companyName": "", "name":"", "url": "build/assets/images/dsc/SMA/sma-import.png", "routeName": "", "description": "" },

              { "companyName": "", "name":"", "url": "build/assets/images/dsc/SMA/BewlsManager.png", "routeName": "", "description": "" },
 
       //       { "companyName": "", "name":"", "url": "build/assets/images/dsc/SMA/RoughDraftBewlDeploy.png", "routeName": "", "description": "" },
 
              { "companyName": "", "name":"", "url": "build/assets/images/dsc/SMA/empty.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/SMA/empty.png", "routeName": "", "description": "" },
                         
         ]);
         
        return this.convertProjectsToProjectTiles(data);
        
    }

  FIAPPData() : Array<ProjectTile> {
        
    // companyName:string;
    // name: string;
    // url: string;
    // image: string;
    // dates: string;
    // description: string;
    //routeName:string;
      //  C:\Lenna\LENNA_WRKSP_1\LennaApp\app\assets\images\dsc\FIAPP
        
  //           { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/", "routeName": "", "description": "" },
        
       let data:any = ([
    
 
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/fiapp-image-1a.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/fiapp-image-2a.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/fiapp-image-3a.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/fiapp-image-4a.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/fiapp-image-5a.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/fiapp-image-6a.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/fiapp-menu-6a.png", "routeName": "", "description": "" },
     
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/fiapp-deployed-android-6a.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/FIAPP/fiapp-deployed-ios-6a.png", "routeName": "", "description": "" },
  
                 
         ]);

        return this.convertProjectsToProjectTiles(data);
    }
    
    DCAFData() : Array<ProjectTile> {
        
    // companyName:string;
    // name: string;
    // url: string;
    // image: string;
    // dates: string;
    // description: string;
    //routeName:string;
   // C:\Lenna\LENNA_WRKSP_1\LennaApp\app\assets\images\dsc\DCAF
        
       let data:any = ([
           
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-Operations.png", "routeName": "", "description": "" },
  
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-processHistory.png", "routeName": "", "description": "" },
    
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-2d3d-conversion-review-Ax.png", "routeName": "", "description": "" },
    
            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-2d3d-conversion-review-Bx.png", "routeName": "", "description": "" },

            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-3DVIEWER-1.png", "routeName": "", "description": "" },

            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-3DVIEWER-a1.png", "routeName": "", "description": "" },

            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-3DVIEWER-a2.png", "routeName": "", "description": "" },

            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-fraudcasereview-3.png", "routeName": "", "description": "" },

            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-FRAUDGRAPH-1.png", "routeName": "", "description": "" },

            { "companyName": "", "name":"", "url": "build/assets/images/dsc/DCAF/dcaf-ActivityReport.png", "routeName": "", "description": "" },
   

                  
         ]);

        return this.convertProjectsToProjectTiles(data);
    }
    
    
    ADIData() : Array<ProjectTile> {
        
    // companyName:string;
    // name: string;
    // url: string;
    // image: string;
    // dates: string;
    // description: string;
    //routeName:string;
   // C:\Lenna\LENNA_WRKSP_1\LennaApp\app\assets\images\dsc\DCAF
        
       let data:any = ([
           
            { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/ADI_Login_400.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/ADI_MainView_600.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/ADI_Menu_Large.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/ADI_MainViewB_Large.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/RadioGroupFilter.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/RadioManager.png", "routeName": "", "description": "" },
            { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/ADI_DebugTool_Large.png", "routeName": "", "description": "" },
   
          //  { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/ADI_Login_300.png", "routeName": "", "description": "" },
          //  { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/ADI_MainView_300.png", "routeName": "", "description": "" },
          //  { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/ADI_Menu_300.png", "routeName": "", "description": "" },
          //  { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/ADI_MainViewB_300.png", "routeName": "", "description": "" },
          //  { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/RadioGroupFilter_300.png", "routeName": "", "description": "" },
          //  { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/RadioGroupManager_300.png", "routeName": "", "description": "" },
          //  { "companyName": "", "name":"", "url": "build/assets/images/itt/ADI/DebugTool_300.png", "routeName": "", "description": "" },
   
   
                  
         ]);

        return this.convertProjectsToProjectTiles(data);
    }
    
    
     
    TPMViewerData() : Array<ProjectTile> {
        
    // companyName:string;
    // name: string;
    // url: string;
    // image: string;
    // dates: string;
    // description: string;
    //routeName:string;
   // C:\Lenna\LENNA_WRKSP_1\LennaApp\app\assets\images\dsc\DCAF
        
       let data:any = ([
           
            { "companyName": "", "name":"", "url": "build/assets/images/itt/TPM Viewer/TPM_MainView_Large.png", "routeName": "", "description": "" },
   
            { "companyName": "", "name":"", "url": "build/assets/images/itt/TPM Viewer/TPM_MainView_NoNavBars_Large.png", "routeName": "", "description": "" },
   
            { "companyName": "", "name":"", "url": "build/assets/images/itt/TPM Viewer/TPM_Menu_Large.png", "routeName": "", "description": "" },
   
            { "companyName": "", "name":"", "url": "build/assets/images/itt/TPM Viewer/TPM_About_Large.png", "routeName": "", "description": "" },
   
                  
         ]);

        return this.convertProjectsToProjectTiles(data);
    }
    
    
    
    
     
    ExecVueData() : Array<ProjectTile> {
        
    // companyName:string;
    // name: string;
    // url: string;
    // image: string;
    // dates: string;
    // description: string;
    //routeName:string;
   // C:\Lenna\LENNA_WRKSP_1\LennaApp\app\assets\images\dsc\DCAF
        
       let data:any = ([
           
         { "companyName": "", "name":"", "url": "build/assets/images/itt/ExecVue/EXECVUE_AirportServicesMapOverlay.png", "routeName": "", "description": "" },
         { "companyName": "", "name":"", "url": "build/assets/images/itt/ExecVue/EXECVUE_ArrivalDepatureGadgets.png", "routeName": "", "description": "" },
         { "companyName": "", "name":"", "url": "build/assets/images/itt/ExecVue/EXECVUE_InMovementChartGadgetWithPropertiesEditor.png", "routeName": "", "description": "" },
         { "companyName": "", "name":"", "url": "build/assets/images/itt/ExecVue/EXECVUE_MetarServiceVisualizedInBallonContainer.png", "routeName": "", "description": "" },
         { "companyName": "", "name":"", "url": "build/assets/images/itt/ExecVue/EXECVUE_NotamsServiceInBalloonAndGadgetContainer.png", "routeName": "", "description": "" },
         { "companyName": "", "name":"", "url": "build/assets/images/itt/ExecVue/EXECVUE_StatusServiceInBallonAndGadgetContainer.png", "routeName": "", "description": "" },
      
   
                  
         ]);

        return this.convertProjectsToProjectTiles(data);
    }
    
    
       
    IAData() : Array<ProjectTile> {
       

       let data:any = ([
           
         { "companyName": "", "name":"", "url": "build/assets/images/rockwell/IOSNextGen/IOS_AircraftPosition.png", "routeName": "", "description": "" },
       
         { "companyName": "", "name":"", "url": "build/assets/images/rockwell/IOSNextGen/IOS_DeployedToSimulator.png", "routeName": "", "description": "" },
         
         { "companyName": "", "name":"", "url": "build/assets/images/rockwell/IOSNextGen/IOS_DeployedToSimulator_Large.png", "routeName": "", "description": "" },
   
         { "companyName": "", "name":"", "url": "build/assets/images/rockwell/IOSNextGen/IOS_RepositionsView.png", "routeName": "", "description": "" },
      
                  
         ]);

        return this.convertProjectsToProjectTiles(data);
    }
    
    
    
    convertProjectsToProjectTiles(projects: Array<IProject>){
        let items= new Array<ProjectTile>();
       //  let projects = this.dataService.getFIAPPItems();
        for (let i=0;  i<projects.length; i++){
              var newTile = new ProjectTile();
         
              newTile.name  = projects[i].name;
              newTile.companyName = projects[i].companyName;
              newTile.description =  projects[i].description;
              newTile.routeName = projects[i].routeName;
              newTile.imageUrl = projects[i].url;
              items.push(newTile);
              
          }
       return items;
    }
}