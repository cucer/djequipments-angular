import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EquipmentsComponent } from './equipments/equipments.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    EquipmentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'main', component: MainpageComponent },
      { path: 'equipments', component: EquipmentsComponent },
      { path: '', redirectTo: 'main', pathMatch: 'full'},
      { path: '**', redirectTo: 'main', pathMatch: 'full'}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
