import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hospital-center',
  templateUrl: './hospital-center.component.html',
  styleUrls: ['./hospital-center.component.css']
})
export class HospitalCenterComponent implements OnInit {

  constructor() { }
  hospitals: []

  ngOnInit(): void {
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var primaryKey = $row.find(".primaryKey").text(); // Find the text
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
  }

}
