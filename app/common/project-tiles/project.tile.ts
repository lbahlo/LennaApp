
import { Component, Input } from '@angular/core';

export interface IProjectTile {
    name: string;
    imageUrl: string;
    active: boolean;
}


@Component({
    selector: 'project-tile',
    styles: [`
    .pane{
      padding: 1em;
    }
  `],
    template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})

//    name: string;
//    containerControl: any;
//    items: any;
//    selectedItem: any;
//}


export class ProjectTile {
    // companyName:string;
    // name: string;
    // url: string;
    // image: string;
    // dates: string;
    // description: string;
    // routeName:string;
  
    @Input() companyName: string;
    @Input() name: string;
    @Input() imageUrl: string;
    @Input() dates: string;
    @Input() routeName: string;
    @Input() description:string;
    @Input() active = false;
}
