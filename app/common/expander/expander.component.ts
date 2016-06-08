import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'expander',
    templateUrl: 'build/common/expander/expander.html'
})
export class ExpanderComponent {

    @Input() title: string;
    visible: boolean = false;
 //   @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() open = new EventEmitter(); 
 //   @Output() close: EventEmitter<any> = new EventEmitter();
    @Output() close = new EventEmitter();
 
    toggle(event: any) {
        this.visible = !this.visible;
        if (this.visible) {
            this.open.emit(event);
        } else {
            this.close.emit(event);
        }
    }
}