import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Session } from '../shared/index';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnInit, OnChanges {
    @Input() private sessions: Session[];
    @Input() private filterBy: string;
    @Input() private sortBy: string;
    private visibleSessions: Session[];

    constructor() { }

    ngOnInit() { }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.visibleSessions.sort(this.sortBy === 'name' ?
                sortByNameAsc :
                sortByVotesDesc
            );
        }
    }

    filterSessions(filter: string) {
        if (this.filterBy === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filter);
        }
    }
}

function sortByNameAsc(s1: Session, s2: Session) {
    if (s1.name > s2.name) return 1;
    if (s1.name < s2.name) return -1;

    return 0;
}

function sortByVotesDesc(s1: Session, s2: Session) {
    return s2.voters.length - s1.voters.length;
}