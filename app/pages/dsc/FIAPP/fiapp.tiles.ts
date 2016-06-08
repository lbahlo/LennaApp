import {Page, NavController, NavParams} from 'ionic-angular';
import { Component, ViewChild, ContentChildren, QueryList, AfterContentInit,Input, Attribute } from '@angular/core';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';
//import {TranslatePipe} from '../../vendor-translate/src/xtranslate.pipe';
//import {TranslateService, TranslateLoader, TranslateStaticLoader, MissingTranslationHandler} from '../../vendor-translate/src/xtranslate.service';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router';


import { TsHelper} from '../../../common/utils/tsHelper';
import { ProjectService } from '../../../services/project.service';
import { IProjectTile, ProjectTile } from '../../../common/project-tiles/project.tile';

//child detial pages
// import {DscPage} from '../../pages/dsc/dsc';
// import {ExcelisPage} from '../../pages/excelis/excelis';
// import {RockwellPage} from '../../pages/rockwell/rockwell';
// import {DigitalPage} from '../../pages/digital/digital';
// import {WangPage} from '../../pages/wang/wang';



@Component({
    selector: 'fiapp-tiles',
    styles: [`
        .fiapp-tiles {
          overflow-y:hidden;
          background:transparent;
        }
   `],
    templateUrl: 'build/pages/dsc/FIAPP/fiapp.tiles.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})


export class FIAPPTiles implements AfterContentInit {
    @Input('title') title: string;
    @Input() subTitle: string;
    @Input() active = false;
  

    //IListComponent implementation
    name: string = "BaseListComponent";
    containerControl: Object = null;
    
    @Input() dataService: ProjectService;
    //@Input() items: any[];
  
    @Input() items: Array<ProjectTile>;
    selectedItem: any;


//    @ViewChild(list:IListComponent) viewChild: any;
//    public listComponent: IListComponent;
 
    //public properties
    private defaultActiveColor = "grey";
    private defaultActiveTextColor = "white";
    @Input('activeColor') activeColor: string;
    @Input('activeTextColor') activeTextColor: string;
        
    //constructor() {
    //    this.items = new Array();
    //   // let li: ListItem = new ListItem("One");
    //   // li.Name = "One";

        
    //    this.items.unshift(new ListItem("one"));
    //    this.items.unshift(new ListItem("two"));
    //    this.items.unshift(new ListItem("three"));

    //}

   
    constructor( @Attribute('active-color') _activeColor : string,
        @Attribute('active-textcolor') _activeTextColor: string,
        private nav: NavController, navParams: NavParams) {

        this.title = "TilesComponent";
         
        if ((_activeColor !== undefined) && (_activeColor !== null)) {
            this.activeColor = _activeColor;
        } else {
            this.activeColor = this.defaultActiveColor;
        }

        if ((_activeTextColor !== undefined) && (_activeTextColor !== null)) {
            this.activeTextColor = _activeTextColor;
        }
        else {
            this.activeTextColor = this.defaultActiveTextColor;
        }
        
        this.items = new Array<ProjectTile>();
    }

   // constructor() { }

    ngOnInit() {

        //   debugger;
       
        //    this.gridOptions.api.sizeColumnsToFit();

        if (this.dataService != null) {
          
           this.items =  this.dataService.getFIAPPItems();
         
           
        //   for (let i=0;  i<projects.length; i++){
        //       var newTile = new ProjectTile();
         
        //       newTile.name  = projects[i].name;
        //       newTile.companyName = projects[i].companyName;
        //       newTile.description =  projects[i].description;
        //       newTile.routeName = projects[i].routeName;
        //       newTile.imageUrl = projects[i].url;
        //       this.items.push(newTile);
              
        //   }
         
          
                            // this.dataService.items$.subscribe((updatedItems:any) => this.items = updatedItems);
      //   this.items = this.dataService.getItems();
    

            // do not subscribe to event changed,control already knows what has been selected
            //this.dataService.selectionChange$.subscribe(
            //    selectedItem => {
            //        this.onSelectItem(selectedItem);
            //    });
            //this.selectedItem = this.dataService.selectedItem();
       }

    }

    // contentChildren are set
    ngAfterContentInit() {

    }

    onImageClick(item: ProjectTile) {
        //  console.log("onImageClick = " + item.Name);
        //   this.router.parent.navigate([item.routeName]);
        // if (item.routeName  === "DscPage") {
        //     this.nav.push(DscPage);
        // }
        // else if (item.routeName  === "ExcelisPage") {
        //     this.nav.push(ExcelisPage);
        // }
        // else if (item.routeName  === "RockwellPage") {
        //     this.nav.push(RockwellPage);
        // }
        // else if (item.routeName  === "DigitalPage") {
        //     this.nav.push(DigitalPage);
        // }
        //     else if (item.routeName  === "WangPage") {
        //     this.nav.push(WangPage);
        // }
         
     
    }



    onSelectItem(item: any) {
        // deactivate all tabs
     //   this.items.forEach(item => item.active = false);
    
        // activate the tab the user has clicked on.
        item.active = true;

        //this.dataService.selectionChanged(item);
    }

    
    toggleItem(item: ProjectTile) {
        if (item.active) {
            item.active = false;
        } else {
            item.active = true;
            this.dataService.selectionChanged(item);
        }
    }

    getBackgroundStyle(item: any) {
        return "";
        //return this.activeColor
        //if (item.active) {
        //    return this.activeColor;
        //} else {
        //    "";
        //}
      }

    getColorStyle(item: any) {
        return this.activeTextColor;
        //if (item.active) {
        //    return this.activeTextColor;
        //} else {
        //    "";
        //}
    }

    //getWidthStyle() {
    //    if (TsHelper.IsNull(this.barWidth)) {
    //        this.barWidth = 100;
    //    }
    //    return this.barWidth + "px";
    //}

}