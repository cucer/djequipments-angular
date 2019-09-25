import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges { // OnInit bu iptal, ngOnChanges kullanacagiz 
  @Input() rating = 0; //Input u, bu componenti nested sekilde cagiracagimiz html sayfasinda gonderecegiz
  starWidth = 0; //default deger
  @Output() ratingClicked: EventEmitter<string> = // bu componenti nested sekilde cagiracagimiz html sayfasinda output olarak yollayacagiz
    new EventEmitter<string>();  

  // constructor() { }    
  ngOnChanges(): void { //ngOnChanges sadece "Input()" tanımlanan degerin degisimini gozetler
    this.starWidth = this.rating * 75 / 5;
  }

  // ngOnInit() { //Bunu ngOnChanges ile değiştirdik, export class tanimi da değişecek
  // }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }  

}
