import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-pathologies',
  templateUrl: './pathologies.component.html',
  styleUrls: ['./pathologies.component.css']
})


export class PathologiesComponent implements OnInit {
  pathologies:[]
  constructor(){}

  ngOnInit(): void {
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var primaryKey = $row.find("td:eq(0)").text(); // Find the text
      var col1=$row.find("td:eq(1)").text();
      var col2=$row.find("td:eq(2)").text();
      var col3=$row.find("td:eq(3)").text();
      
      $("#modifiedName").val(primaryKey);
      $("#modifiedDescription").val(col1);
      $("#modifiedSymptoms").val(col2);
      $("#modifiedTreatment").val(col3);

  });
  }); 

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



