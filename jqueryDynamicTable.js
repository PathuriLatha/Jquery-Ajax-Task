$(function(){
  $("#addForm").hide();
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var table = $("#tableID");
      table.attr({
        "border" : "1",
        "class" : "table table-striped"
      });
      var tHead = $("#theadID");
      tHead.attr({
        "class" : "border bg-primary text-white text-center"
      });
      var hRow = $("<tr></tr>");
      hRow.append(
        "<th>ID</th>"
        +"<th>Name</th>"
        +"<th>Type</th>"
        +"<th>DOB</th>"
        +"<th>Experience</th>"
        +"<th>DOJ</th>"
        +"<th>Action</th>"
      );
      tHead.append(hRow);

      var tBody = $("#tbodyID");
      $.each(myObj.Employees, function(key, value){
        var bRow = $("<tr></tr>");
        bRow.attr({
          "class" : "text-center text-info border border-primary"
        });
        $.each(value, function(index, values){
          var td = $("<td></td>");
          td.attr({
            "class" : "border border-primary"
          });
          //console.log(values);
          td.text(values);
          bRow.append(td);
        });
        var actionTD = $("<td></td>");
        actionTD.attr({
          "class" : "border border-primary"
        });
        var editButton = $("<input>");
        editButton.attr({
          "class" : "editButton btn btn-info",
          "type" : "button",
          "value" : "Edit",
          "data-toggle" : "modal",
          "data-target" : "#editModal"
        });
        var deleteButton = $("<input>");
        deleteButton.attr({
          "class" : "deleteEmployee btn btn-danger",
          "type" : "button",
          "value" : "Delete"
        });
        actionTD.append(editButton);
        actionTD.append(deleteButton);
        bRow.append(actionTD);
        tBody.append(bRow);
      });
      table.append(tHead);
      table.append(tBody);

      $(".deleteEmployee").on("click", function(){
        $(this).parents("tr").remove();
      });
    }
    //var res = JSON.parse(this.responseText);
  };
  xmlhttp.open("GET", "employees.json", true);
  xmlhttp.send();

    $(".addEmployee").on("click", function(){
      $("#addForm").show();
    });
    $("#formAddButton").on("click", function(){
      $("#addForm").hide();
      var table = $("#tableID");
      var addRow = $("<tr></tr>");
      addRow.attr({
        "class" : "border border-primary text-info text-center"
      });
      addRow.append(
        "<td class='displayID border border-primary'>"+$('.addID').val()+"</td>"
        +"<td class='displayName border border-primary'>"+$('.addName').val()+"</td>"
        +"<td class='displayType border border-primary'>"+$('.addType').val()+"</td>"
        +"<td class='displayDOB border border-primary'>"+$('.addDOB').val()+"</td>"
        +"<td class='displayExp border border-primary'>"+$('.addExperience').val()+"</td>"
        +"<td class='displayDOJ border border-primary'>"+$('.addDOJ').val()+"</td>"
        +"<td class='border border-primary'><input class='editButton btn btn-info' type='button' data-toggle='modal' data-target='#editModal' value='Edit'/>&nbsp;&nbsp<input class='deleteEmployee btn btn-danger' type='button' value='Delete'/></td>"
      );
      table.append(addRow);
      $(".deleteEmployee").on("click", function(){
        $(this).parents("tr").remove();
      });
    });

});

