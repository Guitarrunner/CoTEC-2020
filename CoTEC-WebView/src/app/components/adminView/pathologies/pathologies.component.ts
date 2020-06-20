import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pathologies',
  templateUrl: './pathologies.component.html',
  styleUrls: ['./pathologies.component.css']
})


export class PathologiesComponent implements OnInit {
  pathologies:[]
  constructor(){}

  ngOnInit(): void {

  }




  bellaqueo(): void {
   let name = document.getElementById("name");
   let description = document.getElementById("description");
   let symptoms = document.getElementById("symptoms");
   let treatment = document.getElementById("treatment");
   console.log(name.nodeValue);
   this.getTextBoxVal(name);
   
 }
 getTextBoxVal(modalName){
  console.log(modalName.value  )
}
}



