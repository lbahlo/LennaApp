import {Page, NavController, NavParams} from 'ionic-angular';
import {Component,ViewChild} from '@angular/core';
import 'rxjs/Rx'
import {Http, Headers, HTTP_BINDINGS} from '@angular/http'
import {BackandService} from '../../services/backandService'
//common
import { ExpanderComponent } from '../../common/expander/expander.component';
import { TsHelper } from '../../common/utils/tsHelper';

import { Project } from '../../common/models/project';
import { ProjectService } from "../../services/project.service";

//Pages
import { ProfilePage} from '../../pages/profile/profile';
import { IATiles } from '../../pages/rockwell/IA/ia.tiles';

@Page({
  templateUrl: 'build/pages/rockwell/rockwell.html',
  providers: [ProjectService],
  directives: [ExpanderComponent,IATiles] 
})
export class RockwellPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  
   @ViewChild(ExpanderComponent) expanderComponent: ExpanderComponent;
   @ViewChild(IATiles) iaTiles: IATiles;

  constructor(private projectService: ProjectService,
    private nav: NavController, navParams: NavParams) {
    // debugger;
    // If we navigated to this page, we will have an item available as a nav param
 //   this.selectedItem = navParams.get('item');


  }

  goToProfile() {
    this.nav.setRoot(ProfilePage);
  }  



}
