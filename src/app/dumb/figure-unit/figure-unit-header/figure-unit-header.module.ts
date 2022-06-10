import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FigureHearHeaderComponent } from './figure-unit-header.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    declarations: [
        FigureHearHeaderComponent
    ],
    exports: [
        FigureHearHeaderComponent
    ]
})
export class FigureHearHeaderComponentModule {}
