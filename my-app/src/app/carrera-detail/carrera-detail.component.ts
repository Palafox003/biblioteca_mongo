import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Carrera } from '../carrera';
import { CarreraService } from '../carrera.service';
@Component({
  selector: 'app-carrera-detail',
  templateUrl: './carrera-detail.component.html',
  styleUrls: ['./carrera-detail.component.css']
})
export class CarreraDetailComponent implements OnInit {
  
  @Input() carrera?: Carrera;

  constructor(private route: ActivatedRoute,private CarreraService: CarreraService, private location: Location) { }

  ngOnInit(): void {
    this.getCarrera();
  }

  getCarrera(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.CarreraService.getCarrera(id)
      .subscribe(carrera => this.carrera = carrera);
  }

}
