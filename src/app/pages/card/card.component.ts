import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

  cards: any[]= [
    {
      "name": "Perfume",
      "autor": "Juan José",
      "date": "8 horas",
      "numbers": "17/40",
      "price": 2990,
      "img": "./assets/img/premio1.jpg"
    },
    {
      "name": "Airpods",
      "autor": "María Ignacia",
      "date": "8 horas",
      "numbers": "13/41",
      "price": 1500,
      "img": "./assets/img/premio2.jpg"
    },
    {
      "name": "Pistola Silicona",
      "autor": "Cami Silva",
      "date": "5 horas",
      "numbers": "30/41",
      "price": 3500,
      "img": "./assets/img/premio3.jpg"
    },
    {
      "name": "Xiaomi smart",
      "autor": "Kira Ignacia",
      "date": "8 horas",
      "numbers": "11/41",
      "price": 2000,
      "img": "./assets/img/premio4.jpg"
    },
    {
      "name": "Cobertor 2 plazas",
      "autor": "Alonso",
      "date": "13 horas",
      "numbers": "10/41",
      "price": 2500,
      "img": "./assets/img/premio5.jpg"
    },
    {
      "name": "Bolso notebook",
      "autor": "Draco Ignacio",
      "date": "13 horas",
      "numbers": "1/41",
      "price": 3500,
      "img": "./assets/img/premio6.jpg"
    },
    {
      "name": "Bolso Zapatero",
      "autor": "Señor pancracio",
      "date": "23 horas",
      "numbers": "11/41",
      "price": 2500,
      "img": "./assets/img/premio7.jpg"
    },
    {
      "name": "Nintendo Switch Lite",
      "autor": "Ana",
      "date": "23 horas",
      "numbers": "40/41",
      "price": 4500,
      "img": "./assets/img/premio8.jpg"
    },
    {
      "name": "Iphone 8",
      "autor": "Andres",
      "date": "29 horas",
      "numbers": "10/41",
      "price": 2500,
      "img": "./assets/img/premio9.jpg"
    },
  ];
}
