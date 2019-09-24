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
  isPlayer : boolean = false;
  isMixer : boolean = false;
  isController : boolean = false;
  isTurntable : boolean = false;

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

    // eger value varsa performFilter yap, yoksa hepsini ata, burasi istediğin gibi değiştirilebilir
    this.filteredPlayers = this.listFilter ? this.performPlayerFilter(this.listFilter) : this.players;
    this.isPlayer = this.filteredPlayers ? true : false;

    this.filteredMixers = this.listFilter ? this.performMixerFilter(this.listFilter) : this.mixers;
    this.isMixer = this.filteredMixers ? true : false;

    this.filteredControllers = this.listFilter ? this.performControllerFilter(this.listFilter) : this.controllers;
    this.isController = this.filteredControllers ? true : false;    
    
    this.filteredTurntables = this.listFilter ? this.performTurntableFilter(this.listFilter) : this.turntables;
    this.isTurntable = this.filteredTurntables ? true : false;        
  }  

  //ayrıca filteredEquipments tanımlama sebebimiz, filter yapınca orjinal datayı kaybederiz ve geri getiremeyiz
  filteredPlayers: IEquipment[] = [];
  filteredMixers: IEquipment[] = [];
  filteredControllers: IEquipment[] = [];
  filteredTurntables: IEquipment[] = []; 
  players : IEquipment[] = [];
  mixers : IEquipment[] = [];
  controllers : IEquipment[] = [];
  turntables : IEquipment[] = [];

  constructor(private equipmentService: EquipmentService) { }

  performPlayerFilter(filterBy: string): IEquipment[] {
    filterBy = filterBy.toLocaleLowerCase(); // hepsini lowercase yap, bu sayede hepsini lowercase olarak compare edebileceğiz aşağıda
    // filter() metodu, parametre olarak verilen dizi içerisinde bulunan eleman ile işlem yapar ve true dönen tüm değerleri yeni dizi oluşturarak geri döndürür. 
    return this.players.filter((player: IEquipment) =>
      // indexOf ile array icindeki index degerini verir
      player.name.toLocaleLowerCase().indexOf(filterBy) !== -1);      
      // -1 demek array icinde bulamamis demek https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  }  

  performMixerFilter(filterBy: string): IEquipment[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.mixers.filter((mixer: IEquipment) =>
      mixer.name.toLocaleLowerCase().indexOf(filterBy) !== -1);      
  }

  performControllerFilter(filterBy: string): IEquipment[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.controllers.filter((controller: IEquipment) =>
    controller.name.toLocaleLowerCase().indexOf(filterBy) !== -1);      
  }    

  performTurntableFilter(filterBy: string): IEquipment[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.turntables.filter((turntable: IEquipment) =>
    turntable.name.toLocaleLowerCase().indexOf(filterBy) !== -1);      
  }    

  ngOnInit(): void { // return olmayacak o yüzden void ekledik

    // Get Players
    this.equipmentService.getPlayers().subscribe({ //observable servisimizi subscribe yaptık
      next: players => { //subscribe metodun yeni ataması 'next' operatoru
        this.players = players;
        this.filteredPlayers = this.players;
        console.log('ngOnInit Players: ', players);
      },
      error: err => { 
        this.errorMessage = err ;
        console.log('ngOnInit Player Error: ', err)
      }//subscribe metodun yeni error u 'error' operatoru
    });

    // Get Mixers
    this.equipmentService.getMixers().subscribe({ //observable servisimizi subscribe yaptık
      next: mixers => { //subscribe metodun yeni ataması 'next' operatoru
        this.mixers = mixers;
        this.filteredMixers = this.mixers;
        console.log('ngOnInit Mixers: ', mixers);
      },
      error: err => { 
        this.errorMessage = err ;
        console.log('ngOnInit Mixer Error: ', err)
      }//subscribe metodun yeni error u 'error' operatoru
    });  
    
    // Get Controllers
    this.equipmentService.getControllers().subscribe({ //observable servisimizi subscribe yaptık
      next: controllers => { //subscribe metodun yeni ataması 'next' operatoru
        this.controllers = controllers;
        this.filteredControllers = this.controllers;
        console.log('ngOnInit Controllers: ', controllers);
      },
      error: err => { 
        this.errorMessage = err ;
        console.log('ngOnInit Controller Error: ', err)
      }//subscribe metodun yeni error u 'error' operatoru
    });    
    
    // Get Turntables
    this.equipmentService.getTurntables().subscribe({ //observable servisimizi subscribe yaptık
      next: turntables => { //subscribe metodun yeni ataması 'next' operatoru
        this.turntables = turntables;
        this.filteredTurntables = this.turntables;
        console.log('ngOnInit Turntables: ', turntables);
      },
      error: err => { 
        this.errorMessage = err ;
        console.log('ngOnInit Controller Error: ', err)
      }//subscribe metodun yeni error u 'error' operatoru
    });      

  }

}
