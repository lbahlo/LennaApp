import { Component, ElementRef, ViewChild, QueryList, Input, Output, EventEmitter, OnInit, Injectable } from '@angular/core'
//import { TranslatePipe } from '../vendor-translate/src/xtranslate.pipe';
//import { TranslateService, TranslateLoader, TranslateStaticLoader, MissingTranslationHandler } from '../vendor-translate/src/xtranslate.service';
import { Subscription}   from 'rxjs/Subscription';
//common
import { AppStyles } from '../common/styles/appStyles';
import { Tiles } from '../common/tiles/tiles';
import { Tile } from '../common/tiles/tile';

import {AppTilesService } from "./app.tiles.service";

@Component({
    selector: 'home',  // <home></home>
    templateUrl: 'app/ideas/app.ideas.home.html',
    styleUrls: ['app/ideas/app.ideas.home.css'],
    providers: [AppTilesService],
    directives: [Tiles,Tile ]
  //  pipes: [TranslatePipe]

})

@Injectable()
export class AppIdeasHomeComponent implements OnInit{

    // Set our default values
    @Input() appStyles: AppStyles;
    @Input() dataService: AppTilesService;
 //   @Input() tiles: any[];

    @ViewChild(Tiles) tiles: Tiles;
    title = "xxxxxx";
    subTitle = "yyyy";
    activeColor: string;
    activeTextColor: string;

    constructor( private appTilesService: AppTilesService) {
       // this.tiles = appTilesService.getItems();
        this.activeColor = AppStyles.secondaryActiveColor;
        this.activeTextColor = AppStyles.secondaryActiveTextColor;
    }
    

  ngOnInit() {
      console.log('hello `Home` component');

    // this.title.getData().subscribe(data => this.data = data);
  }



}
