import { Component, OnInit } from '@angular/core';
import { ContactsService} from 'src/app/services/hospitalCenter/contacts.service';
import { Contacts} from 'src/app/models/hospitalCenter/contacts';
declare var $: any;


@Component({
  selector: 'app-recent-contacts',
  templateUrl: './recent-contacts.component.html',
  styleUrls: ['./recent-contacts.component.css']
})
export class RecentContactsComponent implements OnInit {
  contactsList=[]
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    var primaryKeyToDelete;
    var primaryKeyToChange;
    $( document ).ready(function() {
      $(".editTable").click(function() {
      var $row = $(this).closest("tr");    // Find the row
      var col1 = $row.find("td:eq(0)").text(); // Find the text
      var col2=$row.find("td:eq(1)").text();
      var primaryKey=$row.find("td:eq(2)").text();
      var col4=$row.find("td:eq(3)").text();
      var col5=$row.find("td:eq(4)").text();
      var col6=$row.find("td:eq(5)").text();
      var col8=$row.find("td:eq(7)").text();
     
      
      $("#modifiedName").val(col1);
      $("#modifiedLastName").val(col2);
      $("#modifiedId").val(primaryKey);
      $("#modifiedAge").val(col4);
      $("#modifiedNationality").val(col5);
      $("#modifiedAddress").val(col6);

      $("#modifiedEmail").val(col8);

  });
  }); 
  /*   Obtener Informacion del Api 
    this.contactsService.getContacts().subscribe((contacts) =>{
      this.contactsList=contacts;
    }) */
    this.contactsList=this.contactsService.getContacts()

     /* Get modified data */
     $(document).ready(function() {
      $("#getModifyData").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        primaryKeyToChange = $row.find("td:eq(0)").text(); // Find the text
        
      });
    })

      $(document).ready(function() {
      $("#sendModifiedContact").click(function() {
        var name=$("#modifiedName").val();
        var lastName= $("#modifiedLastName").val();
        var id=$("#modifiedId").val();
        var age=$("#modifiedAge").val();
        var nationality=$("#modifiedNationality").val();
        var address=$("#modifiedAddress").val();
        var pathologies=$("#modifiedPathologies").val();
        var email=$("#modifiedEmail").val();
        /*this.ContactsService.modificar(primaryKeyToChange, name,lasName,id,age,nationality,address,pathologies,email);*/
      });
    })

    /* Get created data */
    $(document).ready(function() {
      $("#sendCreatedContact").click(function() {
        var name=$("#name").val();
        var lastName= $("#lastName").val();
        var id=$("#id").val();
        var age=$("#age").val();
        var nationality=$("#nationality").val();
        var address=$("#address").val();
        var pathologies=$("#pathologies").val();
        var email=$("#email").val();
        /*this.ContactsService.sendData(name,lasName,id,age,nationality,address,pathologies,email);*/

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
      $("#deleteContact").click(function() {
        var $row = $(this).closest("tr");    // Find the row
        var primaryKey = primaryKeyToDelete;
        /*this.ContactsService.delete(primaryKeyToDelete);*/

      });
    })

  }

}
