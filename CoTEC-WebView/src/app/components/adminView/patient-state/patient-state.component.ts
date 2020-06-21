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
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var primaryKey = $row.find(".primaryKey").text(); // Find the text
     
      
      $("#modifiedState").val(primaryKey);
      

  });
  }); 
  }

}
