import { Component, OnInit } from '@angular/core';
import {RegionsService} from 'src/app/services/administration/regions.service';
import {Regions} from 'src/app/models/administration/regions';

declare var $: any;

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regionsList=[]
  constructor(private regionsService: RegionsService) { }

  ngOnInit(): void {
    var primaryKeyToDelete;
    var primaryKeyToChange;
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var col1 = $row.find("td:eq(1)").text(); // Find the text
      var col2=$row.find("td:eq(2)").text();
      var col3=$row.find("td:eq(3)").text();
      var col4=$row.find("td:eq(4)").text();
      
      $("#modifiedCountry").val(col1);
      $("#modifiedState").val(col2);
      $("#modifiedRegion").val(col3);
      $("#modifiedProvince").val(col4);

    });
    }); 

    /*   Obtener Informacion del Api 
    this.regionsService.getRegions().subscribe((regions) =>{
      this.regionsList=regions;
    }) */
    this.regionsList=this.regionsService.getRegions()
     
    /* Get modified data */
    $(document).ready(function() {
      $("#getModifyData").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        primaryKeyToChange = $row.find("td:eq(0)").text(); // Find the text
        
      });
    })

     $(document).ready(function() {
      $("#sendModifiedRegion").click(function() {
        var country=$("#modifiedCountry").val();
        var description= $("#modifiedState").val();
        var symptoms=$("#modifiedRegion").val();
        var treatment=$("#modifiedProvince").val();

        
      });
    })

    /* Get created data */
    $(document).ready(function() {
      $("#sendCreatedRegion").click(function() {
        var primaryKey=$("#country").val();
        var description= $("#state").val();
        var symptoms=$("#region").val();
        var treatment=$("#province").val();

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
      $("#deleteRegion").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKey = primaryKeyToDelete;
        
      });
    })

    
   
  }

}
