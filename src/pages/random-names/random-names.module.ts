import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomNamesPage } from './random-names';

@NgModule({
  declarations: [
    RandomNamesPage,
  ],
  imports: [
    IonicPageModule.forChild(RandomNamesPage),
  ],
})
export class RandomNamesPageModule {}
