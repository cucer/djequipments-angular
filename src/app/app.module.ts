import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
// import { FormsModule } from '@angular/forms';  //equipment module altina tasindi

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
// import { EquipmentsComponent } from './equipments/equipments.component'; //equipment module altina tasindi
import { EquipmentModule } from './equipments/equipment.module'; //kendi module altinda calisacak
// import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';  //equipment module altina tasindi

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    // ConvertToSpacesPipe, //equipment module altina tasindi
    // EquipmentsComponent  //equipment module altina tasindi
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // FormsModule,  //equipment module altina tasindi
    RouterModule.forRoot([
      { path: 'main', component: MainpageComponent },
      // { path: 'equipments', component: EquipmentsComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full'},
      { path: '**', redirectTo: 'main', pathMatch: 'full'}
    ]),
    EquipmentModule //kendi module altinda calisacak
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
