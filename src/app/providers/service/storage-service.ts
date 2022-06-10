import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { TranslateService } from '@ngx-translate/core';

import { UserData } from '../data/user-data';

import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    
    constructor(
        private storage: Storage,
        private translate: TranslateService,
        private user: UserData
    ) {
        //const nowInSeconds = moment().unix();
        //this.user.purchasesLoadedAt = nowInSeconds;
        
        this.restoreMainVariables();
    }
    
    private restoreMainVariables() {
        
    }
}
