import { JQUERY_TOKEN } from './jQuery.service';
import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
    selector: 'simple-modal',
    template: `
        <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                        <h4 class="modal-title">{{title}}</h4>
                    </div>
                    <div class="modal-body" (click)="closeModal()">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .modal-body { height: 250px; overflow-y: auto; }
    `]
})
export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalcontainer') containerElRef: ElementRef;
    // Variations:
    // ViewChildren, ContentChild, ContentChildren

    constructor( @Inject(JQUERY_TOKEN) private $: any) { }

    ngOnInit() { }

    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
            this.$(this.containerElRef.nativeElement).modal('hide');
        }
    }
}