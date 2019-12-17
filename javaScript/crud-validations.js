//$(document).ready(function(){

  var x;
  var empArray = [
    {
      name: "Rama",
      password: "rama123",
      email: "rama@gmail.com",
      mobile: 9876543210
    },
    {
      name: "Latha",
      password: "latha123",
      email: "latha@gmail.com",
      mobile: 9876543212
    }
  ];

  function viewEmpFunction( ){
    //console.log(empArray)
    var emp = "<table class='table table-hover border border-primary rounded'>";
        emp += "<tr class='bg-info text-white border border-primary rounded'>";
        emp += "<th>Name</th>";
        emp += "<th>Password</th>";
        emp += "<th>Email</th>";
        emp += "<th>Mobile Number</th>";
        emp += "<th colspan='2' align='center' >Action</th>";
        emp += "</tr>";

      for(var i=0; i<empArray.length; i++){
        emp += "<tr class='text-secondary border border-primary rounded'>";
        emp += "<td class='border border-primary rounded'>"+empArray[i].name+"</td>";
        emp += "<td class='border border-primary rounded'>"+empArray[i].password+"</td>";
        emp += "<td class='border border-primary rounded'>"+empArray[i].email+"</td>";
        emp += "<td class='border border-primary rounded'>"+empArray[i].mobile+"</td>";
        emp += "<td class='border border-primary rounded'><input type='button' id='edit' value='edit' class='btn btn-primary' onclick='editEmpFunction("+i+")' data-toggle='modal' data-target='#myModal'/>&nbsp;&nbsp;&nbsp;<input type='button' id='delete' value='delete' class='btn btn-danger' onclick='deleteEmpFunction("+i+")'/></td>"
        emp += "</tr>"
      }
        emp += "</table>";
        // console.log(emp);
      var view = document.getElementById("emp");
      view.innerHTML = emp;
  }

  function addEmpFunction( ){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var mail = document.getElementById("email").value;
    var mbl = document.getElementById("mblno").value;

    empArray.push({"name": name, "password": password, "email": mail, "mobile":mbl});
    document.getElementById("insert").style.display = "none";
    viewEmpFunction( );
  }

  function deleteEmpFunction(index){
    // console.log(empArray);
    var conformation = confirm("are you want delete employee!!");
    if(conformation==true){
      document.getElementById("insert").style.display="none";
      empArray.splice(index,1);
      viewEmpFunction();
      console.log(empArray);
    }
  }

  function editEmpFunction(index){
    x=index;
    document.getElementById("ename").value=empArray[index].name;
    document.getElementById("epassword").value=empArray[index].password;
    document.getElementById("eemail").value=empArray[index].email;
    document.getElementById("emblno").value=empArray[index].mobile;
    // console.log(empArray);
  }

  function updateEmpFunction(){
    document.getElementById("insert").style.display="none";

    var name = document.getElementById("ename").value;
    var password = document.getElementById("epassword").value;
    var mail = document.getElementById("eemail").value;
    var mbl = document.getElementById("emblno").value;

    empArray.splice(x,1,{"name":name, "password":password, "email":mail, "mobile":mbl});
    viewEmpFunction();
  }

  function disableFunction( ){
    document.getElementById("insert").style.display="none";
    document.getElementById("addForm").reset();
  }

  function enableFunction( ){
    document.getElementById("insert").style.display="block";
  }

  function nameValidation( ){
    var names = document.getElementById("name").value;
    var letters=/^[A-z\s\.]+$/;
    var check = names.match(letters);
    //alert(check);
    if(check==null){
      //alert("enter proper name");
      document.getElementById("sname").innerHTML="enter valid name";
      return false;
    }
    else{
      document.getElementById("sname").style.display="none";
      return true;
    }
  }

  function mobileValidation( ){
    var num = document.getElementById("mblno").value;
    var pattern=/^[0-9]{10}$/;
    var check=num.match(pattern);
    //alert(check);
    if(check==null){
      document.getElementById("smblno").innerHTML="please enter valid number";
      return false;
    }
    else{
      document.getElementById("smblno").style.display="none";
      return true;
    }
  }

  function passwordValidation( ){
    var pw = document.getElementById("password").value;
    if(pw==null || pw==""){
      //alert("password can't be empty");
      document.getElementById("spassword").innerHTML="password can't be empty";
      return false;
    }
    else if(pw.length<6){
      //alert("password atleast 6 characters");
      document.getElementById("spassword").innerHTML="password atleast 6 characters";
      return false;
    }
    else {
      document.getElementById("spassword").style.display="none";
      return true;
    }
  }

  function emailValidation( ){
    var mail = document.getElementById("email").value;
    //alert(mail);
    var patterns = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    var check = mail.match(patterns);
    if(check==null){
      //alert("enter valid email!!");
      document.getElementById("semail").innerHTML="enter valid email";
      return false;
    }
    else{
      document.getElementById("semail").style.display="none";
      return true;
    }
  }

  function allValidate( ){
    if(nameValidation( )==false){
      nameValidation( );
      return false;
    }
    else if(passwordValidation( )==false){
      passwordValidation( );
      return false;
    }
    else if(emailValidation( )==false){
      emailValidation( );
      return false;
    }
    else if(mobileValidation( )==false){
      mobileValidation( );
      return false;
    }
    else{
      addEmpFunction( );
      document.getElementById("addForm").reset();
      return true;
    }
  }

  function enameVaildation( ){
    //alert("hi");
    var names = document.getElementById("ename").value;
    var letters=/^[A-z\s\.]+$/;
    if(letters.test(names)){
      //alert("ok");
      document.getElementById("editname").style.display="none";
      return true;
    }
    else{
      //alert("fail");
      document.getElementById("editname").innerHTML="please enter valid name";
      return false;
    }
  }

  function emobileVaildation( ){
    //alert("hi");
    var num = document.getElementById("emblno").value;
    var pattern=/^[0-9]{10}$/;
    if(pattern.test(num)){
      //alert("ok");
      document.getElementById("editmblno").style.display="none";
      return true;
    }
    else{
      //alert("fail");
      document.getElementById("editmblno").innerHTML="please enter valid mobile number";
      return false;
    }
  }

  function eemailVaildation( ){
    //alert("hi");
    var mail = document.getElementById("eemail").value;
    var pattern=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    if(pattern.test(mail)){
      //alert("ok");
      document.getElementById("editemail").style.display="none";
      return true;
    }
    else{
      //alert("fail");
      document.getElementById("editemail").innerHTML="please enter valid email";
      return false;
    }
  }

  function epasswordVaildation( ){
    //alert("hi");
    var pwd = document.getElementById("epassword").value;
    if(pwd==null || pwd==""){
      document.getElementById("editpassword").innerHTML="password can't be empty";
      return false;
    }
    else if(pwd.length<6){
      document.getElementById("editpassword").innerHTML="password atleast 6 characters";
      return false;
    }
    else{
      document.getElementById("editpassword").style.display="none";
      return true;
    }
  }

  function editAllValidate( ){
    if(enameVaildation( )==false){
      enameVaildation( );
      return false;
    }
    else if(epasswordVaildation( )==false){
      epasswordVaildation( );
      return false;
    }
    else if(eemailVaildation( )==false){
      eemailVaildation( );
      return false;
    }
    else if(emobileVaildation( )==false){
      emobileVaildation( );
      return false;
    }
    else{
      updateEmpFunction( );
      return true;
    }
  }
//});
$(function(){
  $("#addEmp, #form-cancel, #form-submit").click(function(){
    $("#addEmp").toggle();
  });
});
