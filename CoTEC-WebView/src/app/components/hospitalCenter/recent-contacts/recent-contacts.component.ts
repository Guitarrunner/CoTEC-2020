import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-recent-contacts',
  templateUrl: './recent-contacts.component.html',
  styleUrls: ['./recent-contacts.component.css']
})
export class RecentContactsComponent implements OnInit {
  contacts=[]
  constructor() { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var col1 = $row.find("td:eq(0)").text(); // Find the text
      var col2=$row.find("td:eq(1)").text();
      var primaryKey=$row.find("td:eq(2)").text();
      var col4=$row.find("td:eq(3)").text();
      var col5=$row.find("td:eq(4)").text();
      var col6=$row.find("td:eq(5)").text();
      var col8=$row.find("td:eq(5)").text();
     
      
      $("#modifiedName").val(col1);
      $("#modifiedLastName").val(col2);
      $("#modifiedId").val(primaryKey);
      $("#modifiedAge").val(col4);
      $("#modifiedNationality").val(col5);
      $("#modifiedAddress").val(col6);

      $("#modifiedEmail").val(col8);

  });
  }); 

  }

}
