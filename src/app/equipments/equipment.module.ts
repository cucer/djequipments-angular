import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // directives, pipes, NgIf, NgForOf vb. icin kullanilir
import { FormsModule } from '@angular/forms';  //app moduleden tasindi

import { EquipmentsComponent } from './equipments.component'; //app moduleden tasindi
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe'; //app moduleden tasindi


@NgModule({
  declarations: [
    EquipmentsComponent, //app moduleden tasindi
    ConvertToSpacesPipe //app moduleden tasindi
  ],
  imports: [
    RouterModule.forChild([
      { path: 'equipments', component: EquipmentsComponent }
    ]),    
    FormsModule,  //app moduleden tasindi
    CommonModule
  ]
})
export class EquipmentModule { }
