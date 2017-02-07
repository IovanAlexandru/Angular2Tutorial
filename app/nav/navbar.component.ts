import { EventService, Session } from './../events/index';
import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styleUrls: ['app/nav/navbar.component.css']
})
export class NavBarComponent implements OnInit {
    private searchTerm: string = "";
    private foundSessions: Session[];
    constructor(private authService: AuthService, private eventService: EventService) { }

    ngOnInit() { }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe((sessions: Session[])=>{
            this.foundSessions = sessions;
        });
    }
}