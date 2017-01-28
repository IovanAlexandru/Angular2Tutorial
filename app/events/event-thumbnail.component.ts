import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Event, Location, Session } from './models';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html'
})
export class EventThumbnailComponent implements OnInit {
    @Input() event: Event;
    @Output() eventClick = new EventEmitter();

    ngOnInit() { }

    handleClickMe(){
        this.eventClick.emit(this.event.name);
    }
}