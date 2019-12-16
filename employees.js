var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    var jsonArrayLength = Object.keys(myObj.Employees).length;
    //alert(jsonArrayLength);
    for(var j=0; j<jsonArrayLength; j++){
      var tableRow = "<td class='displayID border border-primary'>"+myObj.Employees[j].empId+"</td>";
          tableRow += "<td class='displayName border border-primary'>"+myObj.Employees[j].empName+"</td>";
          tableRow += "<td class='displayType border border-primary'>"+myObj.Employees[j].jobType+"</td>";
          tableRow += "<td class='displayDOB border border-primary'>"+myObj.Employees[j].dateOfBirth+"</td>";
          tableRow += "<td class='displayExp border border-primary'>"+myObj.Employees[j].jobExperience+"</td>";
          tableRow += "<td class='displayDOJ border border-primary'>"+myObj.Employees[j].dateOFJoining+"</td>";
          tableRow += "<td class='border border-primary'><button class='editEmployee btn btn-info' type='button' data-toggle='modal' data-target='#editModal'><i class='material-icons'>&#xe3c9;</i></button>&nbsp;&nbsp<button class='deleteEmployee btn btn-danger' type='button'><i class='fa fa-trash''></i></button></td>";
      document.getElementById(j).innerHTML = tableRow;
    }
    var res = JSON.parse(this.responseText);
  }
};
xmlhttp.open("GET", "employees.json", true);
xmlhttp.send();

$(function(){
  $("#addForm").hide();
  $("#editForm").hide();

  $("#addEmployee").on("click", function(){
    $("#addForm").show();
    $("#addEmployee").hide();
    $("#displayTable").toggle();
    //$("#editForm").hide();
  });
  $("#formAddSubmit").on("click", function(){
    $("#addForm").hide();
    $("#addEmployee").show();
    $("#displayTable").toggle();

    $("#displayTable").append(
        "<tr class='border border-primary text-info text-center'>"
        +"<td class='displayID border border-primary'>"+$('#addID').val()+"</td>"
        +"<td class='displayName border border-primary'>"+$('#addName').val()+"</td>"
        +"<td class='displayType border border-primary'>"+$('#addType').val()+"</td>"
        +"<td class='displayDOB border border-primary'>"+$('#addDOB').val()+"</td>"
        +"<td class='displayExp border border-primary'>"+$('#addExperience').val()+"</td>"
        +"<td class='displayDOJ border border-primary'>"+$('#addDOJ').val()+"</td>"
        +"<td class='border border-primary'><button class='editEmployee btn btn-info' type='button' data-toggle='modal' data-target='#editModal'><i class='material-icons'>&#xe3c9;</i></button>&nbsp;&nbsp<button class='deleteEmployee btn btn-danger' type='button'><i class='fa fa-trash''></i></button></td>"
        +"</tr>"
    );
     $(".deleteEmployee").on("click", function(){
         $(this).parents("tr").remove();
     });
     $(".editEmployee").on("click", function(){
         var result = $(this).closest("tr");
         var editID = result.find(".displayID").text();
         var editName = result.find(".displayName").text();
         var editType = result.find(".displayType").text();
         var editDOB = result.find(".displayDOB").text();
         var editExp = result.find(".displayExp").text();
         var editDOJ = result.find(".displayDOJ").text();
         //alert(editID+"\n"+editName+"\n"+editType+"\n"+editDOB+"\n"+editExp+"\n"+editDOJ);

         $("#editModalID").val(editID);
         $("#editModalName").val(editName);
         $("#editModalType").val(editType);
         $("#editModalDOB").val(editDOB);
         $("#editModalExperience").val(editExp);
         $("#editModalDOJ").val(editDOJ);
     });
  });


  $(".editEmployee").on("click", function(){
    var result = $(this).closest("tr");
    var editID = result.find(".displayID").text();
    var editName = result.find(".displayName").text();
    var editType = result.find(".displayType").text();
    var editDOB = result.find(".displayDOB").text();
    var editExp = result.find(".displayExp").text();
    var editDOJ = result.find(".displayDOJ").text();
    //alert(editID+"\n"+editName+"\n"+editType+"\n"+editDOB+"\n"+editExp+"\n"+editDOJ);

    $("#editModalID").val(editID);
    $("#editModalName").val(editName);
    $("#editModalType").val(editType);
    $("#editModalDOB").val(editDOB);
    $("#editModalExperience").val(editExp);
    $("#editModalDOJ").val(editDOJ);

  });

  $(".editSumbit").on("click", function(){
    //$("#editModal").hide();
     var afterEditID = $("#editModalID").val();
     var afterEditName = $("#editModalName").val();
     var afterEditType = $("#editModalType").val();
     var afterEditDOB = $("#editModalDOB").val();
     var afterEditExperience = $("#editModalExperience").val();
     var afterEditDOJ = $("#editModalDOJ").val();
     alert(afterEditID+"\n"+afterEditName+"\n"+afterEditType+"\n"+afterEditDOB+"\n"+afterEditExperience+"\n"+afterEditDOJ);

    /* var afterUpdate = $(this).parents("tr").append(
        "<td>"+afterEditID+"</td>"
        +"<td>"+afterEditName+"</td>"
        +"<td>"+afterEditType+"</td>"
        +"<td>"+afterEditDOB+"</td>"
        +"<td>"+afterEditExperience+"</td>"
        +"<td>"+afterEditDOJ+"</td>"
     );
    $("#displayTable").append(afterUpdate);
    */
    var afterUpdate = $(this).closest("tr");
    // afterUpdate.$(".displayID").val(afterEditID);
    //afterUpdate.find(".displayID").text(afterEditID);
    //afterUpdate.siblings('td.displayID').text(afterEditID);

    $("#editForm").hide();
  });
  $("#editCancelSumbit").on("click", function(){
    $("#editForm").hide();
  });
  $(".deleteEmployee").on("click", function(){
    $(this).parents("tr").remove();
  });
});
