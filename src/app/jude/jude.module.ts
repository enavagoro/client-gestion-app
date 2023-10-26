import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { JudePageRoutingModule } from './jude-routing.module';

import { JudePage } from './jude.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JudePageRoutingModule
  ],
  declarations: [JudePage]
})
export class JudePageModule {}
