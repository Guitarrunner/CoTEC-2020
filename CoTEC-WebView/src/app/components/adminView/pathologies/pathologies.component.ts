import { Component, OnInit } from '@angular/core';
import {PathologiesService} from 'src/app/services/administration/pathologies.service';
import {Pathologies} from 'src/app/models/administration/pathologies';


declare var $: any;


@Component({
  selector: 'app-pathologies',
  templateUrl: './pathologies.component.html',
  styleUrls: ['./pathologies.component.css']
})


export class PathologiesComponent implements OnInit {
  pathologiesList=[]

  constructor(private pathologiesService: PathologiesService){}

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
      
      $("#modifiedName").val(primaryKey);
      $("#modifiedDescription").val(col1);
      $("#modifiedSymptoms").val(col2);
      $("#modifiedTreatment").val(col3);

  });
  }); 

    /*   Obtener Informacion del Api 
    this.pathologiesService.getPathologies().subscribe((pathologies) =>{
      this.pathologiesList=pathologies;
    }) */
    this.pathologiesList=this.pathologiesService.getPathologies()

      /* Get modified data */

    $(document).ready(function() {
      $("#getModifyData").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        primaryKeyToChage = $row.find("td:eq(0)").text(); // Find the text
        
      });
    })  

    $(document).ready(function() {
      $("#sendModifiedPathology").click(function() {
        var primaryKey=$("#modifiedName").val();
        var description= $("#modifiedDescription").val();
        var symptoms=$("#modifiedSymptoms").val();
        var treatment=$("#modifiedTreatment").val();
        
        /*this.PathologiesService.modificar(primaryKeyToChage, primaryKey, description,symptoms, treatment); */
      });
    })

    /* Get created data */
    $(document).ready(function() {
      $("#sendCreatedPathology").click(function() {
        var primaryKey=$("#pathologyName").val();
        var description= $("#description").val();
        var symptoms=$("#symptoms").val();
        var treatment=$("#treatment").val();

        /*this.PathologiesService.sendData( primaryKey, description,symptoms, treatment); */
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
        /*this.PathologiesService.delete( primaryKeyToDelete); */
      });
    })

  }


 
}



