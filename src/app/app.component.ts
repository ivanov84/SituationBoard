import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

import { Device } from '@ionic-native/device/ngx';
import { Globalization } from '@ionic-native/globalization/ngx';

import { UserData } from './providers/data/user-data';

import { AppService } from './providers/service/app-service';

import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class MyAppComponent {
    
    constructor(
        public user: UserData,
        private platform: Platform,
        private device: Device,
        private globalization: Globalization,
        private storage: Storage,
        private apps: AppService
    ) {
        console.log(`APP COMPONENT constructor`);
        
        user.deviceId = 'test111';
        user.tester = true;
        user.currentLanguage = 'ru';
        
        this.platform.ready().then(async () => {
            
            console.log(`APP COMPONENT constructor platform.ready() fired`);
            
            this.startMachine();
        }); 
    }
    
    private startMachine() {
        this.storage.get(this.user.DEVICE_ID).then((deviceId: string) => {
            if (deviceId) {
                this.user.deviceId = deviceId;
                this.getLanguage();
            }
            else {
                this.saveDeviceId(this.device.uuid);
            }
        });
    }
    
    private saveDeviceId(deviceId: string) {
        this.storage.set(this.user.DEVICE_ID, deviceId);
        this.user.deviceId = deviceId;
        this.getLanguage();
    }
    
    private getLanguage() {
        
        this.storage.get(this.user.CURRENT_LANG).then((lang: string) => {
            
            if (lang) {
                this.user.currentLanguage = lang;
                this.renderGUI();
            }
            else {
                
                this.globalization.getPreferredLanguage().then((properties: any) => {
                    
                    let lang = properties.value;
                    if (lang && lang.length >= 2) {
                        lang = lang.toLowerCase();
                        const shortLang =  lang.substring(0, 2);
                        if (shortLang === 'ru' || shortLang === 'uk' || shortLang === 'be') {
                            this.user.currentLanguage = 'ru';
                        }
                        else {
                            this.user.currentLanguage = shortLang;
                        }
                    }
                    
                    this.renderGUI();
                })
                .catch((err: any) => {
                    console.log(`getPreferredLanguage() failed: ${JSON.stringify(err)}`);
                    this.renderGUI();
                });
            }
        });
    }
    
    private async renderGUI() {
        const lang = this.user.currentLanguage;
        this.apps.TranslateApp(lang);
        moment.locale(lang);
    }
}
