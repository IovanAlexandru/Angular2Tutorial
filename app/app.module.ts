import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { Error404Component } from './errors/404.component';

import { NavBarComponent } from './nav/navbar.component';

import { 
    EventThumbnailComponent, 
    EventsListComponent, 
    EventDetailsComponent, 
    CreateEventComponent,
    EventListResolver,
    EventService,
    EventRouteActivator
} from './events/index';

import { EventsAppComponent } from './events-app.component';

import { ToastrService } from './common/toastr.service';

import { appRoutes } from './routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        NavBarComponent,
        EventThumbnailComponent,
        EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
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
        EventListResolver
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
