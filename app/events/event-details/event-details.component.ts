import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Event } from '../shared/models';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px, padding-right: 20px }
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    private event: Event;
    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        let eventId = Number(this.route.snapshot.params['id']);
        this.event = this.eventService.getEvent(eventId);
    }
}