import { Page,  NavController, NavParams} from 'ionic-angular';
import { Input, ViewChild, OnInit,Injectable} from '@angular/core';
//common
import { ExpanderComponent } from '../../common/expander/expander.component';
import { AppStyles } from '../../common/styles/appStyles';
import { ProjectTiles } from '../../common/project-tiles/project.tiles';
import { ProjectTile } from '../../common/project-tiles/project.tile';

import { ProjectService } from "../../services/project.service";
import { IProject, Project } from "../../common/models/project";


import { EducationComponent } from "./EDUCATION/education";
import { SoftwareComponent } from "./SOFTWARE/software";





import {Type} from '@angular/core';

@Page({
  templateUrl: 'build/pages/profile/profile.html',
  providers: [ProjectService],
  directives: [SoftwareComponent,EducationComponent,ProjectTiles,ProjectTile,ExpanderComponent]
})


@Injectable()
export class ProfilePage implements OnInit{
  
   // Set our default values
   @Input() appStyles: AppStyles;
   @Input() dataService: ProjectService;
 //   @Input() tiles: any[];

   @ViewChild(ProjectTiles) projectTiles: ProjectTiles;
   @ViewChild(ExpanderComponent) expanderComponent: ExpanderComponent;
   @ViewChild(EducationComponent) educationComponent: EducationComponent;   
   @ViewChild(SoftwareComponent) softwareComponent: SoftwareComponent;  
     
     
  title = "xxxxxx";
  subTitle = "yyyy";
  activeColor: string;
  activeTextColor: string;
     
  projects: Array<Project> = new Array<Project>(); 
    
  constructor(private projectService: ProjectService) {
        this.activeColor = AppStyles.secondaryActiveColor;
        this.activeTextColor = AppStyles.secondaryActiveTextColor;

  }
  
  ngOnInit(){
     //this.projects = this.mockData();
     //this.dataService.items = this.projects;
   //  this.projectTiles.tiles = this.projects;
    // this.projectTiles.items = this.projects;
  }
  
  
}
