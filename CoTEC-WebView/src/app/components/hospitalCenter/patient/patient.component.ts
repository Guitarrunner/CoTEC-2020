import { Component, OnInit } from '@angular/core';
import { PatientsService} from 'src/app/services/hospitalCenter/patients.service';
import { Patients} from 'src/app/models/hospitalCenter/patients';



import { of } from 'rxjs';

declare var $: any;
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientsList=[]
  constructor(private patientsService: PatientsService){}
  


  ngOnInit(): void {
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var col1 = $row.find("td:eq(0)").text(); // Find the text
      var col2=$row.find("td:eq(1)").text();
      var primaryKey=$row.find("td:eq(2)").text();
      var col4=$row.find("td:eq(3)").text();
      var col5=$row.find("td:eq(4)").text();

      var col9=$row.find("td:eq(8)").text();
      
      $("#modifiedName").val(col1);
      $("#modifiedLastName").val(col2);
      $("#modifiedId").val(primaryKey);
      $("#modifiedAge").val(col4);
      $("#modifiedNationality").val(col5);

      $("#modifiedMedication").val(col9);

  });
  }); 

  /*   Obtener Informacion del Api 
    this.patientsService.getPatients().subscribe((patients) =>{
      this.patientsList=patients;
    }) */
    this.patientsList=this.patientsService.getPatients()



  }




}
