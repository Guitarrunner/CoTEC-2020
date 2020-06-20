import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-center',
  templateUrl: './hospital-center.component.html',
  styleUrls: ['./hospital-center.component.css']
})
export class HospitalCenterComponent implements OnInit {

  constructor() { }
  hospitals: []

  ngOnInit(): void {
  }

}
