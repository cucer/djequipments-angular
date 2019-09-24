import { Component, OnInit } from '@angular/core';
import { EquipmentService } from './equipment.service';
import { IEquipment } from './equipment';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {
  pageTitle = 'Search DJ Equipment';
  errorMessage = '';  

  _listFilter = '';
  // veri alışverişini güvenli hale getirmek istiyorsak, projede verileri saklamanız gerekiyorsa getter ve setter ‘leri kullanmak zorundayız
  // Gizli bir değişkene veri yazmak için setter, veri okumak için getter metodu kullanılır.
  // Getters ve setters, değişken değerlerini almak ve atamak için kullanılan işlev veya yöntemdir
  // temelde bir bilgiyi getiren ve değiştiren işlevlerdir
  get listFilter(): string {
    console.log('GET listFilter');
    return this._listFilter;
  }
  set listFilter(value: string) {
    console.log('SET listFilter');
    this._listFilter = value;
    this.filteredEquipments = this.listFilter ? this.performFilter(this.listFilter) : this.equipments;
    // eger value varsa performFilter yap, yoksa hepsini ata, burasi istediğin gibi değiştirilebilir
  }  

  //ayrıca filteredEquipments tanımlama sebebimiz, filter yapınca orjinal datayı kaybederiz ve geri getiremeyiz
  filteredEquipments: IEquipment[] = []; 
  equipments : IEquipment[] = [];  

  constructor(private equipmentService: EquipmentService) { }

  performFilter(filterBy: string): IEquipment[] {
    filterBy = filterBy.toLocaleLowerCase(); // hepsini lowercase yap, bu sayede hepsini lowercase olarak compare edebileceğiz aşağıda
    // filter() metodu, parametre olarak verilen dizi içerisinde bulunan eleman ile işlem yapar ve true dönen tüm değerleri yeni dizi oluşturarak geri döndürür. 
    return this.equipments.filter((equipment: IEquipment) =>
      // indexOf ile array icindeki index degerini verir
      equipment.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
      // -1 demek array icinde bulamamis demek https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  }  

  ngOnInit(): void { // return olmayacak o yüzden void ekledik
    this.equipmentService.getEquipments().subscribe({ //observable servisimizi subscribe yaptık
      next: equipments => { //subscribe metodun yeni ataması 'next' operatoru
        this.equipments = equipments;
        this.filteredEquipments = this.equipments;
        console.log('Eqs: ', equipments);
      },
      error: err => { 
        this.errorMessage = err ;
        console.log('Err: ', err)
      }//subscribe metodun yeni error u 'error' operatoru
    });
  }

}
