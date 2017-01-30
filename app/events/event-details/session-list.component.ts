import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../shared/index';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnInit {
    @Input() private sessions: Session[];

    constructor() { }

    ngOnInit() { }
}