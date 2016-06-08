
import { Component, Input, ViewChild, OnInit,Injectable} from '@angular/core';
//common
import { ExpanderComponent } from '../../../common/expander/expander.component';
import { AppStyles } from '../../../common/styles/appStyles';

import {Type} from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: 'build/pages/profile/SKILLS/skills.html',
  providers: [],
  directives: [ExpanderComponent]
})


@Injectable()
export class SkillsComponent implements OnInit{
  
   // Set our default values
   @Input() appStyles: AppStyles;
   @ViewChild(ExpanderComponent) expanderComponent: ExpanderComponent;
     
  title = "";
  subTitle = "";
  activeColor: string;
  activeTextColor: string;
  
  constructor() {
        this.activeColor = AppStyles.secondaryActiveColor;
        this.activeTextColor = AppStyles.secondaryActiveTextColor;
 }
  
 ngOnInit(){ }
  
}
