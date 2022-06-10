import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { Subscription } from 'rxjs';

import { PhotoService } from '../providers/service/photo-service';
import { UserData } from '../providers/data/user-data';

export abstract class BaseAddPhotoPageComponent {
    
    subscription: Subscription = new Subscription();
    
    constructor(
        protected alertCtrl: AlertController,
        protected loadingCtrl: LoadingController,
        protected translate: TranslateService,
        protected photos: PhotoService,
        protected user: UserData
    ) {}
    
    Destroy() {
        this.subscription.unsubscribe();
    }
}
