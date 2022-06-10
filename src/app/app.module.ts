import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { IonicStorageModule } from '@ionic/storage';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Device } from '@ionic-native/device/ngx';
import { Globalization } from '@ionic-native/globalization/ngx';

import { MyAppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot({ scrollAssist: false }),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    declarations: [MyAppComponent],
    entryComponents: [MyAppComponent],
    bootstrap: [MyAppComponent],
    providers: [
        Device,
        Globalization,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ]
})
export class AppModule { }
