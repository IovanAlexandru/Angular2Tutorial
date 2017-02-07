import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    CollapsibleWellComponent,
    JQUERY_TOKEN,
    TOASTR_TOKEN,
    Toastr,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index';
import { AuthService } from './user/auth.service';

import { Error404Component } from './errors/404.component';

import { NavBarComponent } from './nav/navbar.component';

import {
    EventThumbnailComponent,
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    EventService,
    EventRouteActivator,
    SessionListComponent,
    DurationPipe,
    CreateSessionComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';

import { appRoutes } from './routes';

declare let toastr: Toastr;
declare let jQuery: any;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        NavBarComponent,
        // Events
        EventThumbnailComponent,
        EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        SessionListComponent,
        // Common
        CollapsibleWellComponent,
        // Pipes
        DurationPipe,
        // Error components
        Error404Component,
        SimpleModalComponent,
        ModalTriggerDirective
    ],
    providers: [
        EventService,
        EventRouteActivator,
        // equivallent with:
        // {
        //     provide: EventRouteActivator,
        //     useClass: EventRouteActivator
        // },
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQUERY_TOKEN,
            useValue: jQuery
        },
        EventListResolver,
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cance?');
    }

    return true;
}
