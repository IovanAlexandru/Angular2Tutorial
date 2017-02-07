import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event, Location, Session } from './shared/models';

@Component({
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    private events: Event[];

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }
}