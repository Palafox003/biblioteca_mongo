import { Component, OnInit } from '@angular/core';

import { Carrera } from '../carrera';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {
  carreras: Carrera[] = [];
  constructor(private carreraService: CarreraService) { }

  ngOnInit(): void {
    this.getNcarreras();
  }

  getNcarreras(): void {
    this.carreraService.getNcarreras()
        .subscribe(carreras => this.carreras = carreras);
  }
}
