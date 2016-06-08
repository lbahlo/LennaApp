
import {App, IonicApp, Nav,Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';
import {GettingStartedPage} from './pages/getting-started/getting-started';
import {ListPage} from './pages/list/list';


import {ProfilePage} from './pages/profile/profile';
import {DscPage} from './pages/dsc/dsc';
import {ExcelisPage} from './pages/excelis/excelis';
import {RockwellPage} from './pages/rockwell/rockwell';
import {DigitalPage} from './pages/digital/digital';
import {WangPage} from './pages/wang/wang';

import {Type} from '@angular/core';


@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

 // rootPage: any = GettingStartedPage;
 // pages: Array<{title: string, component: any}>

  rootPage: Type = ProfilePage;
  pages: Array<{title: string, component: Type, icon:string}>;
  
  //constructor(private platform: Platform) {
  constructor(private app: IonicApp, private platform: Platform) {

    this.initializeApp();

    // used for an example of ngFor and navigation
        // set our app's pages
    this.pages = [
      { title: 'Profile', component: ProfilePage,icon:"build/assets/images/ljb-menu.png" },
      { title: 'Digital Signal Corporation', component: DscPage,icon:"build/assets/images/dsc/dsc-menu.png"  },
      { title: 'ITT Excelis', component: ExcelisPage,icon:"build/assets/images/itt/itt-menu.png"  },
      { title: 'Rockwell Collins', component: RockwellPage,icon:"build/assets/images/rockwell/rockwell-menu.png"  },
      { title: 'Digital Equipment Corporation', component: DigitalPage,icon:"build/assets/images/digital/digital-menu.png"  },
      { title: 'Wang Laboratories', component: WangPage,icon:"build/assets/images/wang/wang-menu.png" }
      //{ title: 'My First List', component: ListPage }
      
      
      // this.pages = [
      // { title: 'Profile', component: ProfilePage },
      // { title: 'Digital Signal Corporation [2/2013-Present]', component: DscPage },
      // { title: 'ITT Excelis [4/2009-2/2013]', component: ExcelisPage },
      // { title: 'Rockwell Collins [5/2004-4/2009] ', component: RockwellPage },
      // { title: 'Digital Equipment Corporation [6/1987-2/1997]', component: DigitalPage },
      // { title: 'Wang Laboratories', component: WangPage }
    ];
    // this.pages = [
    //   { title: 'Getting Started', component: GettingStartedPage },
    //   { title: 'List', component: ListPage }
    // ];

  }


  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  initializeAppOrig() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     //wait StatusBar.styleDefault();
    });
  }
  
 openPage(page) {
    // close the menu when clicking a link from the menu
    let menu =  this.app.getComponent('leftMenu');
    
   // this.app.getComponent('leftMenu').close();
  
    // navigate to the new page if it is not the current page
    
    let nav = this.app.getComponent('nav');
    this.nav.setRoot(page.component);
  }

  // openPageOrig(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }
}
