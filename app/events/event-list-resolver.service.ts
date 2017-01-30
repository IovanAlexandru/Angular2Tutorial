import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Event } from './shared/models';
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<Event[]> {
    constructor(private eventService: EventService) { }

    resolve() {
        return this.eventService.getEvents().map(events => events);
    }
}