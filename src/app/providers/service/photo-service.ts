import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { UserData } from '../data/user-data';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {
    
    constructor(
        //private camera: Camera,
        private storage: Storage,
        private user: UserData
    ) {}
    
    /*async GetPhoto(cameraContentType: CameraContentType, photoContentType: PhotoContentType): Promise<any> {
        
        const sourceType = cameraContentType === CameraContentType.new ? this.camera.PictureSourceType.CAMERA
            : cameraContentType === CameraContentType.saved ? this.camera.PictureSourceType.SAVEDPHOTOALBUM
            : this.camera.PictureSourceType.PHOTOLIBRARY;
        
        const targetDemensions = photoContentType === PhotoContentType.gchat || photoContentType === PhotoContentType.profileMini ? 128 : 1080;
        
        const options: CameraOptions = {
            quality: 100,
            targetWidth: targetDemensions,
            targetHeight: targetDemensions,
            sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        
        if (this.user.platform === 'a') {
            options.correctOrientation = true;
        }
        
        if (photoContentType === PhotoContentType.situation) {
            this.storage.set(this.user.TEMP_CACHE, true);
            this.storage.set(this.user.TEMP_TITLE, this.user.tempTitle);
            this.storage.set(this.user.TEMP_TEXT, this.user.tempText);
            this.storage.set(this.user.TEMP_GENERALHASHTAG, this.user.tempGeneralHashtag);
        }
        
        try {
            const file_uri = await this.camera.getPicture(options);
            this.removePreparedPhotoCache();
            return file_uri;
        }
        catch (err) {
            this.removePreparedPhotoCache();
            return '';
        }
    }*/
}
