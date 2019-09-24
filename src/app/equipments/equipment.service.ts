import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IEquipment } from './equipment';


@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  // private eqUrl = 'api/equipments.json';
  private playerUrl = 'http://localhost:3000/players';
  private mixerUrl = 'http://localhost:3000/mixers';
  private controllerUrl = 'http://localhost:3000/controllers';
  private turntableUrl = 'http://localhost:3000/turntables';  

  constructor(private http: HttpClient) { }

  // Observable dönecek, tipini de boservble tanımladık, IEquipment tarzında dönecek
  // Return yapmalı
  getPlayers(): Observable<IEquipment[]> { // contains only one element-yalnızca bir elemen içerir
    // this.http.get(this.eqUrl) //
    // return this.http.get<IEquipment[]>(this.eqUrl); // operator kullanabiliriz pipe,map,filter vs.
    return this.http.get<IEquipment[]>(this.playerUrl) //buradaki IEquipment arrayı generic parameterdir
    .pipe(
      // tap - yan etki (side-effect) adı verilen işleri yapabilmenize olanak tanıyor.
      tap(players => console.log('Players: ' + JSON.stringify(players))), // Bu adrese istek yapmaya başladığını konsola yazdır...
      catchError(this.handleError) // hata varsa yakala 404 vb.
    );    
  }

  getMixers(): Observable<IEquipment[]> {
    return this.http.get<IEquipment[]>(this.mixerUrl)
    .pipe(
      tap(mixers => console.log('Mixers: ' + JSON.stringify(mixers))),
      catchError(this.handleError)
    );    
  }  

  getControllers(): Observable<IEquipment[]> {
    return this.http.get<IEquipment[]>(this.controllerUrl)
    .pipe(
      tap(controllers => console.log('Controllers: ' + JSON.stringify(controllers))),
      catchError(this.handleError)
    );    
  }
  
  getTurntables(): Observable<IEquipment[]> {
    return this.http.get<IEquipment[]>(this.turntableUrl)
    .pipe(
      tap(turntables => console.log('Turntables: ' + JSON.stringify(turntables))),
      catchError(this.handleError)
    );    
  }     

  private handleError(err: HttpErrorResponse) { // Error cevabını yakalamak için HttpErrorResponse
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side veya network error
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error('handleError: ', errorMessage);
    return throwError(errorMessage); // hata fırlatabilmek için bu operatör gerekli
  }

}
