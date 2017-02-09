import { Directive, OnInit } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: LocationValidatorDirective,
        multi: true
    }]
})
export class LocationValidatorDirective implements OnInit, Validator {
    constructor() { }

    ngOnInit() { }

    isNullOrEmpty(value: string): boolean {
        return value == null || value == "";
    }

    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if (
            (
                (!addressControl && !this.isNullOrEmpty(addressControl.value)) ||
                (!cityControl && !this.isNullOrEmpty(cityControl.value)) ||
                (!countryControl && !this.isNullOrEmpty(countryControl.value))
            ) ||
            (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }

        return { validateLocation: false };
    }
}