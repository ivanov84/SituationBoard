import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'page-main',
    templateUrl: 'main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainPage implements OnInit {
    
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}
    
    ngOnInit() {
        
    }
}
