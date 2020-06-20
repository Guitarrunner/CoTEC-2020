import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-state',
  templateUrl: './patient-state.component.html',
  styleUrls: ['./patient-state.component.css']
})
export class PatientStateComponent implements OnInit {
  states:[]
  constructor() { }

  ngOnInit(): void {
  }

}
