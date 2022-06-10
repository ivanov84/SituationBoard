import { Injectable, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { TranslateService } from '@ngx-translate/core';

import { Observable, Subject } from 'rxjs';

import { UserData } from '../data/user-data';

import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    
    constructor(
        private ngZone: NgZone,
        private translate: TranslateService,
        private alertCtrl: AlertController,
        private user: UserData
    ) {}
    
    TickOlympApp() {
        this.ngZone.run(() => { console.log('Outside Done!'); });
    }
    
    TranslateApp(lang: string) {
        
        const preLocale = '/locale-';
        const translationFileName = preLocale + lang;
        const defaultFileName = preLocale + 'en';
        this.translate.setDefaultLang(defaultFileName);
        this.translate.use(translationFileName).toPromise().then(() => {
            
        }).catch(() => {
            this.translate.use(defaultFileName);
        });
    }
}
