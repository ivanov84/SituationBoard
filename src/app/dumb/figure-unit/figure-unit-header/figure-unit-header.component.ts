import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserData } from 'src/app/providers/data/user-data';

@Component({
    selector: 'dumb-comment-header',
    templateUrl: 'comment-header.component.html',
    styleUrls: ['./comment-header.component.scss']
})
export class FigureHearHeaderComponent implements OnInit {
    
    //@Input() post: Post;
    
    //@Output() avatarSelect = new EventEmitter();
    
    constructor(
        public user: UserData
    ) {}
    
    ngOnInit() {
        
    }
}
