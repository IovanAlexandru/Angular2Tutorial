import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQUERY_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;
    constructor(refEl: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
        this.el = refEl.nativeElement;
    }

    ngOnInit() {
        this.$(this.el).bind("click", (e: any) => this.$(`#${this.modalId}`).modal({}));
    }
}