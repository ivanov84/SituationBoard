import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserData {
    
    DEVICE_ID = 'deviceid';
    CURRENT_LANG = 'chosenLocId';
    
    deviceId = 'test111';
    
    tester = false;
    
    isAppGuiRendered = false;
    
    currentLanguage = 'en';
}
