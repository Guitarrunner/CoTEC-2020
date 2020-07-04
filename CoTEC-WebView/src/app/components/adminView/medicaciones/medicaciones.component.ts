import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicaciones',
  templateUrl: './medicaciones.component.html',
  styleUrls: ['./medicaciones.component.css']
})
export class MedicacionesComponent implements OnInit {

  accion = ["AGREGAR","MODIFICAR","ELIMINAR"];
  constructor() { }

  ngOnInit(): void {
  }

}
