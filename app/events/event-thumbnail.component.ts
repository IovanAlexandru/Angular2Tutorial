import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Event, Location, Session } from './shared/models';

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styleUrls: ['app/events/event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
    @Input() event: Event;
    ngOnInit() { }

    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am';;
        return {
            green: isEarlyStart,
            bold: isEarlyStart
        };
    }
}