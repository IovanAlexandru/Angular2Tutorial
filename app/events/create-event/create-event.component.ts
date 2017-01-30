import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/events/create-event/create-event.component.html'
})
export class CreateEventComponent implements OnInit {
    isDirty: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() { }

    cancel() {
        this.router.navigate(['/events']);
    }
}