import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';// directives, pipes, NgIf, NgForOf vb. icin kullanilir
import { FormsModule } from '@angular/forms';  // ngModel icin
import { StarComponent } from './star.component';


@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ //Diger componentlere Shared etmek istedigimiz seyleri burada export edebiliriz, bu sayede SharedModule ekli olan module lerde kullanılabilir
    FormsModule,  //bunu buraya ekledik equipment.module altında tekrar tanımlama gerek yok, at shared e heryerde kullan
    CommonModule, //bunu buraya ekledik equipment.module altında tekrar tanımlama gerek yok, at shared e heryerde kullan
    StarComponent
  ]  
})
export class SharedModule { }
