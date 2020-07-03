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
    var primaryKeyToDelete;
    var primaryKeyToChage;

    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var primaryKey = $row.find("td:eq(0)").text(); // Find the text
      var col1=$row.find("td:eq(1)").text();
      var col2=$row.find("td:eq(2)").text();
      var col3=$row.find("td:eq(3)").text();
      var col4=$row.find("td:eq(4)").text();
      var col5=$row.find("td:eq(5)").text();
      
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


    /* Get modified data */
    $(document).ready(function() {
      $("#getModifyData").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        primaryKeyToChage = $row.find("td:eq(0)").text(); // Find the text
        
      });
    })  

    $(document).ready(function() {
      $("#sendModifiedHospital").click(function() {
        var primaryKey=$("#modifiedName").val();
        var location= $("#modifiedLocation").val();
        var capacity=$("#modifiedCapacity").val();
        var uci=$("#modifiedUci").val();
        var director=$("#modifiedDirector").val();
        var contact=$("#modifiedPhone").val();
        
        /*this.hospitalsService.modificar(primaryKeyToChage, primaryKey, location, capacity, uci, director, contact);*/
      });
    })

    /* Get created data */
    $(document).ready(function() {
      $("#sendCreatedHospital").click(function() {
        var primaryKey=$("#hospitalName").val();
        var location= $("#location").val();
        var capacity=$("#capacity").val();
        var uci=$("#capacitydUCI").val();
        var director=$("#director").val();
        var contact=$("#phone").val();

        /*this.hospitalsService.sendData(primaryKey, location, capacity, uci, director, contact);*/
        
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
      $("#deleteHospital").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKey = primaryKeyToDelete;
        
        /*this.hospitalsService.delete(primaryKeyToDelete);*/

      });
    })


    
  }

}
