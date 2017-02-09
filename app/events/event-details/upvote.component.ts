import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['app/events/event-details/upvote.component.css']
})
export class UpvoteComponent implements OnInit {
    @Input() count: number;
    @Input() set voted(val: boolean) {
        this.iconColor = val ? 'red' : 'white';
    }

    @Output() vote: EventEmitter<any> = new EventEmitter<any>();
    private iconColor: string;

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.vote.emit({});
    }
}