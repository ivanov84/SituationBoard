import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TranslateModule } from '@ngx-translate/core';

import { MainPage } from './main.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        TranslateModule,
        DragDropModule,
        RouterModule.forChild([{ path: '', component: MainPage }])
    ],
    declarations: [MainPage]
})
export class MainPageModule {}
