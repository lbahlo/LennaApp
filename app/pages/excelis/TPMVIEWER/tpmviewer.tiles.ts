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
    selector: 'tpmviewer-tiles',
    styles: [`
        .tpmviewer-tiles {
          overflow-y:hidden;
          background:transparent;
        }
   `],
    templateUrl: 'build/pages/excelis/TPMVIEWER/tpmviewer.tiles.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})


export class TPMViewerTiles implements AfterContentInit {
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
        
     
    constructor( @Attribute('active-color') _activeColor : string,
        @Attribute('active-textcolor') _activeTextColor: string,
        private nav: NavController, navParams: NavParams) {
           
        this.items = new Array<ProjectTile>();
    }

   // constructor() { }

    ngOnInit() {

        if (this.dataService != null) {
           this.items =  this.dataService.getTPMViewerItems();
        }

    }

    // contentChildren are set
    ngAfterContentInit() {  }

    onImageClick(item: ProjectTile) { }


    onSelectItem(item: any) {
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
 
}