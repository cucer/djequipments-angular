import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';  // artık shared module de tanimli, buraya gerek yok
// import { FormsModule } from '@angular/forms';    // artık shared module de tanimli, buraya gerek yok

import { EquipmentsComponent } from './equipments.component'; //app moduleden tasindi
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe'; //app moduleden tasindi
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EquipmentsComponent, //app moduleden tasindi
    ConvertToSpacesPipe //app moduleden tasindi
  ],
  imports: [
    RouterModule.forChild([
      { path: 'equipments', component: EquipmentsComponent }
    ]),    
    // FormsModule,  // artık shared module de tanimli, buraya gerek yok
    // CommonModule, // artık shared module de tanimli, buraya gerek yok
    SharedModule
  ]
})
export class EquipmentModule { }
