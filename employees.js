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
          tableRow += "<td class='border border-primary'><input class='editEmployee btn btn-info' type='button' data-toggle='modal' data-target='#editModal' value='Edit'/>&nbsp;&nbsp<input class='deleteEmployee btn btn-danger' type='button' value='Delete'/></td>";
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
    //$("#editForm").hide();
  });
  $("#formAddSubmit").on("click", function(){
    $("#addForm").hide();

   /* $("#displayTable").append(
    "<tr class='border border-primary text-info text-center'>"
    +"<td class='displayID border border-primary'>"+$('#addID').val()+"</td>"
    +"<td class='displayName border border-primary'>"+$('#addName').val()+"</td>"
    +"<td class='displayType border border-primary'>"+$('#addType').val()+"</td>"
    +"<td class='displayDOB border border-primary'>"+$('#addDOB').val()+"</td>"
    +"<td class='displayExp border border-primary'>"+$('#addExperience').val()+"</td>"
    +"<td class='displayDOJ border border-primary'>"+$('#addDOJ').val()+"</td>"
    +"<td class='border border-primary'><input class='editEmployee btn btn-info' type='button' value='Edit'/>&nbsp;&nbsp<input class='deleteEmployee btn btn-danger' type='button' value='Delete'/></td>"+
    "</tr>"
    );*/

    $("#displayTable").append(
        "<tr class='border border-primary text-info text-center'>"
        +"<td class='displayID border border-primary'>"+$('#addModalID').val()+"</td>"
        +"<td class='displayName border border-primary'>"+$('#addModalName').val()+"</td>"
        +"<td class='displayType border border-primary'>"+$('#addModalType').val()+"</td>"
        +"<td class='displayDOB border border-primary'>"+$('#addModalDOB').val()+"</td>"
        +"<td class='displayExp border border-primary'>"+$('#addModalExperience').val()+"</td>"
        +"<td class='displayDOJ border border-primary'>"+$('#addModalDOJ').val()+"</td>"
        +"<td class='border border-primary'><input class='editEmployee btn btn-info' type='button' value='Edit'/>&nbsp;&nbsp<input class='deleteEmployee btn btn-danger' type='button' value='Delete'/></td>"+
        "</tr>"
        );
  });


  $(".editEmployee").on("click", function(){
    var result = $(this).closest("tr");
    var editID = result.find(".displayID").text();
    var editName = result.find(".displayName").text();
    var editType = result.find(".displayType").text();
    var editDOB = result.find(".displayDOB").text();
    var editExp = result.find(".displayExp").text();
    var editDOJ = result.find(".displayDOJ").text();
    alert(editID+"\n"+editName+"\n"+editType+"\n"+editDOB+"\n"+editExp+"\n"+editDOJ);

    $("#editModalID").val(editID);
    $("#editModalName").val(editName);
    $("#editModalType").val(editType);
    $("#editModalDOB").val(editDOB);
    $("#editModalExperience").val(editExp);
    $("#editModalDOJ").val(editDOJ);

  });

  $("#editSumbit").on("click", function(){
    $("#editForm").hide();
  });
  $("#editCancelSumbit").on("click", function(){
    $("#editForm").hide();
  });
  $(".deleteEmployee").on("click", function(){
    $(this).parents("tr").remove();
    $("#editForm").hide();
    $("#addForm").hide();
  });
});
