import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-pathology',
  templateUrl: './create-pathology.component.html',
  styleUrls: ['./create-pathology.component.css']
})
export class CreatePathologyComponent implements OnInit {
  symptoms=[]
  constructor() { }

  ngOnInit(): void {
  }

}
