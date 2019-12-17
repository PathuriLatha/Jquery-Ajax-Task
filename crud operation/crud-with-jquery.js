$(document).ready(function(){

  $("#btnAdd").on("click", function(){
    Add();
  });
  //Add, Save, Edit and Delete functions code
  $(".btnEdit").bind("click", Edit());
  $(".btnDelete").bind("click", Delete() );
  $("#btnAdd").bind("click", Add());

  $.getJSON( "employees.json", function( data ) {
    $.each(data.Employees, function(key, value){
      var bRow = $("<tr></tr>");
      bRow.attr({
        "class" : "text-center text-secondary border border-primary"
      });
      $.each(value, function(index, values){
        var td = $("<td></td>");
        td.attr({
          "class" : "border border-primary"
        });
        //console.log(values);
        td.text(values);
        //alert(td.text);
        bRow.append(td);
      });//each()
      var actionTD = $("<td></td>");
      actionTD.attr({
        "class" : "border border-primary"
      });
      var editButton = $("<input>");
      editButton.attr({
        "class" : "btnEdit btn btn-info",
        "type" : "button",
        "value" : "Edit"
      });

      var deleteButton = $("<input>");
      deleteButton.attr({
        "class" : "btnDelete btn btn-danger",
        "type" : "button",
        "value" : "Delete"
      });

      actionTD.append(editButton);
      actionTD.append(deleteButton);
      bRow.append(actionTD);
      $("tbody").append(bRow);
    });//each()
  });//getJSON()

  function Add(){
    //alert("add");
    $("tbody").append(
      "<tr class='text-center text-secondary border border-primary'>"+
        "<td class='border border-primary'><input type='text'/></td>"+
        "<td class='border border-primary'><input type='text'/></td>"+
        "<td class='border border-primary'><input type='text'/></td>"+
        "<td class='border border-primary'><input type='text'/></td>"+
        "<td class='border border-primary'><button class='btnSave btn btn-info'>Save</button><button class='btnDelete btn btn-secondary'>X</button></td>"+
      "</tr>"
    );
    $(".btnSave").bind("click", Save);
    $(".btnDelete").bind("click", Delete);
  };//add()

  function Save(){
    //alert("save");
    var par = $(this).parent().parent();
    par.attr({
      "class" : "text-center text-secondary border border-primary"
    });
    var tdID = par.children("td:nth-child(1)");
    var tdName = par.children("td:nth-child(2)");
    var tdType = par.children("td:nth-child(3)");
    var tdDOB = par.children("td:nth-child(4)");
    var tdButtons = par.children("td:nth-child(5)");

    tdID.html(tdID.children("input[type=text]").val());
    tdName.html(tdName.children("input[type=text]").val());
    tdType.html(tdType.children("input[type=text]").val());
    tdDOB.html(tdDOB.children("input[type=text]").val());
    tdButtons.html("<button class='btnEdit btn btn-info'><i class='material-icons'>&#xe3c9;</button><button class='btnDelete btn btn-danger'><i class='fa fa-trash''></i></button>");

    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);
  };//save()

  function Edit(){
    //alert("Edit");
    var par = $(this).parent().parent(); //tr
    par.attr({
      "class" : "text-center text-secondary border border-primary"
    });
    var tdID = par.children("td:nth-child(1)");
    var tdName = par.children("td:nth-child(2)");
    var tdType = par.children("td:nth-child(3)");
    var tdDOB = par.children("td:nth-child(4)");
    var tdButtons = par.children("td:nth-child(5)");

    tdID.html("<input type='text' id='txtName' value='"+tdID.html()+"'/>");
    tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
    tdType.html("<input type='text' id='txtPhone' value='"+tdType.html()+"'/>");
    tdDOB.html("<input type='text' id='txtEmail' value='"+tdDOB.html()+"'/>");
    tdButtons.html("<button class='btnSave btn btn-primary'>Update</button>");

    $(".btnSave").bind("click", Save);
    $(".btnEdit").bind("click", Edit);
    $(".btnDelete").bind("click", Delete);
  };//edit()

  function Delete(){
   // alert("Delete");
    var par = $(this).parent().parent();
    par.remove();
  };//delete()

});
