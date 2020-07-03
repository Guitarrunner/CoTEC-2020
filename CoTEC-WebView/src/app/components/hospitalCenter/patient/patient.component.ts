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
    var primaryKeyToChange;
    var primaryKeyToDelete;
    
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

    /* Get modified data */
    $(document).ready(function() {
      $("#getModifyData").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        primaryKeyToChange = $row.find("td:eq(0)").text(); // Find the text
        
      });
    })

      $(document).ready(function() {
      $("#sendModifiedPatient").click(function() {
        var name=$("#modifiedName").val();
        var lastName= $("#modifiedLastName").val();
        var id=$("#modifiedId").val();
        var age=$("#modifiedAge").val();
        var nationality=$("#modifiedNationality").val();
        var regions=$("#modifiedRegions").val();
        var pathologies=$("#modifiedPathologies").val();
        var states=$("#modifiedStates").val();
        var medication=$("#modifiedMedication").val();
        var intern=$("#modifiedIntern").val();
        var uci=$("#modifiedUci").val();
        /*this.PatientsService.modificar(primaryKeyToChange,name,lastName,id,age,nationality,region,pathologies,states,medication,intern,uci);*/
      });
    })

    /* Get created data */
    $(document).ready(function() {
      $("#sendCreatedPatient").click(function() {
        var name=$("#name").val();
        var lastName= $("#lastName").val();
        var id=$("#id").val();
        var age=$("#age").val();
        var nationality=$("#nationality").val();
        var regions=$("#regions").val();
        var pathologies=$("#pathologies").val();
        var states=$("#states").val();
        var medication=$("#medication").val();
        var intern=$("#intern").val();
        var uci=$("#uci").val();
        /*this.PatientsService.sendData(name,lastName,id,age,nationality,region,pathologies,states,medication,intern,uci);*/
      });
    })

    /* Get deleted data */
    $(document).ready(function() {
      $("#getDeleteData").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        primaryKeyToDelete = $row.find("td:eq(0)").text(); // Find the text
        
      });
    })

    $(document).ready(function() {
      $("#deletePatient").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKey = primaryKeyToDelete;
        /*this.PatientsService.delete(primaryKeyToDelete);*/
      });
    })

  }




}
