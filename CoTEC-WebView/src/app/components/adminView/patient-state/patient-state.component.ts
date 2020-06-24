import { Component, OnInit } from '@angular/core';
import {StatesService} from 'src/app/services/administration/states.service';
import {States} from 'src/app/models/administration/states';


@Component({
  selector: 'app-patient-state',
  templateUrl: './patient-state.component.html',
  styleUrls: ['./patient-state.component.css']
})
export class PatientStateComponent implements OnInit {
  statesList=[]
  constructor(private statesService: StatesService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var primaryKey = $row.find("td:eq(0)").text(); // Find the text
     
      
      $("#modifiedState").val(primaryKey);
      

  });
  }); 
  /*   Obtener Informacion del Api 
    this.statesService.getStates().subscribe((states) =>{
      this.statesList=states;
    }) */
    this.statesList=this.statesService.getStates()

  }

}
