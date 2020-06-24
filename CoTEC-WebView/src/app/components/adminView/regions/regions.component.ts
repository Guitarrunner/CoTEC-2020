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
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var primaryKey = $row.find("td:eq(0)").text(); // Find the text
      var col1=$row.find("td:eq(1)").text();
      var col2=$row.find("td:eq(2)").text();
      var col3=$row.find("td:eq(3)").text();
      var col4=$row.find("td:eq(4)").text();
      
      $("#modifiedCountry").val(primaryKey);
      $("#modifiedState").val(col1);
      $("#modifiedRegion").val(col2);
      $("#modifiedProvince").val(col3);

    });
    }); 

    /*   Obtener Informacion del Api 
    this.regionsService.getRegions().subscribe((regions) =>{
      this.regionsList=regions;
    }) */
    this.regionsList=this.regionsService.getRegions()

    
   
  }

}
