import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { of } from 'rxjs';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients:[]
  constructor(){}
  


  ngOnInit(): void {
  }




}
