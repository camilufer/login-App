import { Injectable } from '@angular/core';
import { Heroe } from '../pages/heroes/heroes.interface';

@Injectable()
export class HeroesService {

  private heroes: Heroe[] = [
    {
      nombre: "Perfume",
      bio: "Juan José",
      img: "assets/img/premio1.jpg",
      fecha: "8 horas",
      casa:"DC",
      price: 1990
    },
    {
      nombre: "Airpods",
      bio: "María Ignacia",
      img: "assets/img/premio2.jpg",
      fecha: "7 horas",
      casa:"DC",
      price: 1990
    },
    {
      nombre: "Pistola Silicona",
      bio: "Cami Silva",
      img: "assets/img/premio3.jpg",
      fecha: "6 horas",
      casa: "Marvel",
      price: 1990
    },
    {
      nombre: "Xiaomi smart",
      bio: "Kira Ignacia",
      img: "assets/img/premio4.jpg",
      fecha: "5 horas",
      casa:"Marvel",
      price: 1990
    },
    {
      nombre: "Cobertor 2 plazas",
      bio: "Alonso",
      img: "assets/img/premio5.jpg",
      fecha: "4 horas",
      casa: "DC",
      price: 1990
    },
    {
      nombre: "Bolso notebook",
      bio: "Draco Ignacio",
      img: "assets/img/premio6.jpg",
      fecha: "3 horas",
      casa: "Marvel",
      price: 1990
    },
    {
      nombre: "Bolso Zapatero",
      bio: "Señor pancracio",
      img: "assets/img/premio7.jpg",
      fecha: "2 horas",
      casa: "Marvel",
      price: 1990
    },
    {
      nombre: "Nintendo Switch Lite",
      bio: "Ana",
      img: "assets/img/premio8.jpg",
      fecha: "2 horas",
      casa: "Marvel",
      price: 1990
    },
    {
      nombre: "Iphone 8",
      bio: "Andres",
      img: "assets/img/premio9.jpg",
      fecha: "1 hora",
      casa: "Marvel",
      price: 1990
    }
  ];


  constructor() {
    console.log('Servicio listo para usar!!');
  }


  public getHeroes(): Heroe[] {
    return this.heroes;
  }

  public getHeroe(indice: string): Heroe {
    return this.heroes[indice];
  }


}
