import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styleUrls: ['app/nav/navbar.component.css']
})
export class NavBarComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { }
}