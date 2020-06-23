import { Component, OnInit } from '@angular/core';
import { HospitalsService} from 'src/app/services/administration/hospitals.service';
import {Hospitals} from 'src/app/models/administration/hospitals';


declare var $: any;


@Component({
  selector: 'app-hospital-center',
  templateUrl: './hospital-center.component.html',
  styleUrls: ['./hospital-center.component.css']
})
export class HospitalCenterComponent implements OnInit {

  constructor(private hospitalsService: HospitalsService) { }
  hospitalsList: Hospitals[]=[]
  
  ngOnInit(): void {
    var index
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var primaryKey = $row.find("td:eq(1)").text(); // Find the text
      var col1=$row.find("td:eq(2)").text();
      var col2=$row.find("td:eq(3)").text();
      var col3=$row.find("td:eq(4)").text();
      var col4=$row.find("td:eq(5)").text();
      var col5=$row.find("td:eq(6)").text();
      
      $("#modifiedName").val(primaryKey);
      $("#modifiedLocation").val(col1);
      $("#modifiedCapacity").val(col2);
      $("#modifiedUci").val(col3);
      $("#modifiedDirector").val(col4);
      $("#modifiedPhone").val(col5);

    });
    }); 


  /*   Obtener Informacion del Api 
    this.hospitalsService.getHospitals().subscribe((hospitals) =>{
      this.hospitalsList=hospitals;
    }) */
    this.hospitalsList=this.hospitalsService.getHospitals()
  }

}
