import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Event, Session } from '../shared/models';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding-left: 20px, padding-right: 20px }
        .event-image { height: 100px; }
        a { cursor: pointer; }
    `]
})
export class EventDetailsComponent implements OnInit {
    private event: Event;
    addMode: boolean = false;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let eventId = Number(params['id']);
            this.event = this.eventService.getEvent(eventId);
            this.addMode = false;
            this.filterBy = 'all';
            this.sortBy = 'votes';
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: Session) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;

        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}