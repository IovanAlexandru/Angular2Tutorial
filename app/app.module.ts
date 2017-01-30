import { AuthService } from './user/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CreateSessionComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';

import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes';

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
        EventThumbnailComponent,
        EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        CreateSessionComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
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
