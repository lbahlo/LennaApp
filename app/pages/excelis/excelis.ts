

import {Page, NavController, NavParams} from 'ionic-angular';
import {Component,ViewChild} from '@angular/core';
import 'rxjs/Rx'
import {Http, Headers, HTTP_BINDINGS} from '@angular/http'
import {BackandService} from '../../services/backandService'
//common
import { ExpanderComponent } from '../../common/expander/expander.component';
import { TsHelper } from '../../common/utils/tsHelper';

//import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {DscDetailsPage} from '../dsc-details/dsc-details';
import { Project } from '../../common/models/project';
import { ProjectService } from "../../services/project.service";
import { EXECVUETiles } from "./EXECVUE/execvue.tiles";
import { ADITiles } from "./ADI/adi.tiles";
import { TPMViewerTiles } from "./TPMVIEWER/tpmviewer.tiles";

//Pages
import { ProfilePage} from '../../pages/profile/profile';


@Page({
  templateUrl: 'build/pages/excelis/excelis.html',
  providers: [ProjectService],
  directives: [ExpanderComponent,EXECVUETiles,ADITiles,TPMViewerTiles] 
 
})

export class ExcelisPage {

  @ViewChild(ExpanderComponent) expanderComponent: ExpanderComponent;
  @ViewChild(EXECVUETiles) execVueTiles: EXECVUETiles;
  @ViewChild(ADITiles) adiTiles: ADITiles;
  @ViewChild(TPMViewerTiles) tpmViewerTiles: TPMViewerTiles;
        
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private projectService: ProjectService,
        private nav: NavController, navParams: NavParams) {
    
     // debugger;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  
  

  goToProfile() {
    this.nav.setRoot(ProfilePage);
  }  

  onEditOn(event: any) {
      // if (TsHelper.IsNotNull(this.bewlService)) {
      //     this.bewlService.onEditGrid(true);
      // }
  }

  onEditOff(event: any) {
      // if (TsHelper.IsNotNull(this.bewlService)) {
      //     this.bewlService.onEditGrid(false);
      // }
  }

  itemTapped(event, item) {
      this.nav.push(DscDetailsPage, {
      item: item
    });
  }
}
