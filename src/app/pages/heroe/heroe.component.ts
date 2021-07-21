import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../heroes/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: Heroe;

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe( params => {
      // console.log( params['idpersonalizado'] );
      this.heroe = _heroesService.getHeroe( params['idpersonalizado'] );
    }); // Esto devuelve un observador
  }

}
