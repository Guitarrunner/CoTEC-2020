import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions=[]
  constructor() { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var primaryKey = $row.find("td:eq(0)").text(); // Find the text
      var col1=$row.find("td:eq(1)").text();
      var col2=$row.find("td:eq(2)").text();
      var col3=$row.find("td:eq(3)").text();
      var col4=$row.find("td:eq(4)").text();
      
      $("#modifiedCountry").val(col1);
      $("#modifiedState").val(col2);
      $("#modifiedRegion").val(col3);
      $("#modifiedProvince").val(col4);

  });
  }); 

    
   
  }

}
