import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ModifierComponent} from '../modifier/modifier';

@Component({
    selector: 'globe',
    templateUrl: 'build/common/globe/globe.html',
    directives: [ModifierComponent]
    
})
export class GlobeComponent {
}