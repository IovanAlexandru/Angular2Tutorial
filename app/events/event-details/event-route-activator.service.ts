import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        var id = Number(route.params['id']);
        const eventExists: boolean = Boolean(this.eventService.getEvent(id));
        if (!eventExists) {
            this.router.navigate(['/404']);
        }

        return eventExists;
    }
}