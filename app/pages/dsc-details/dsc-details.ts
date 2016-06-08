import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/dsc-details/dsc-details.html'
})
export class DscDetailsPage {
    selectedItem: any;

    constructor(private nav: NavController, navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
}
