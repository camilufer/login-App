import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 

  imagenes:any[]=[
    { name:'',
      img:'./assets/img/imgSlider5.jpg',
    }, 
    {
      name:'',
      img:'./assets/img/imgSlider6.jpg',
      desc:''
    },
    {
      name:'',
      img:'./assets/img/imgSlider7.jpg',
      desc:''
    }
  ];
 
  
  constructor(private _config:NgbCarouselConfig) { 
    _config.interval = 5000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;

  }

  ngOnInit(): void {
    
  }

}
