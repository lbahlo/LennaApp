import {Page, NavController, NavParams} from 'ionic-angular';
import {Component,ViewChild} from '@angular/core';

//common
import { ExpanderComponent } from '../../common/expander/expander.component';
import { TsHelper } from '../../common/utils/tsHelper';

//Pages
import { ProfilePage} from '../../pages/profile/profile';

@Page({
  templateUrl: 'build/pages/wang/wang.html',
  directives: [ExpanderComponent] 
})
export class WangPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(private nav: NavController, navParams: NavParams) {
   //   debugger;
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


}
