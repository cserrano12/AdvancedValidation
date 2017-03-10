function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

if ( userEntered.length < 6 ){
  //Show message that there is an error with the username...
  document.getElementById("usernameError").innerHTML="!Bad username. Username must be at least 6 characters!";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  //Turn the username items red
  document.getElementById("usernameGroup").classList.add("has-error");
  }
else if (userEntered.indexOf(' ') >= 0){
  document.getElementById("usernameError").innerHTML="!Bad username. Username cannot have any spaces!";
  document.getElementById("usernameError").classList.remove("hidden-message");
  document.getElementById("usernameError").classList.add("shown-message");
  }
else {
  document.getElementById("usernameGroup").classList.add("has-success");
  document.getElementById("usernameError").innerHTML="Username OK";
  }


if ( passEntered.length < 6 || passEntered.length > 20 ){
  document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters!";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
}
else if (userEntered == passEntered){
  document.getElementById("passwordError").innerHTML="Password cannot be the same as Username!";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
}
else if (passEntered.indexOf("password") >= 0){
  document.getElementById("passwordError").innerHTML="Password cannot be any variation of password!";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
}
else if (passEntered.indexOf("PASSWORD") >= 0){
  document.getElementById("passwordError").innerHTML="Password cannot be any variation of password!";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
}
else {
  document.getElementById("passwordGroup").classList.add("has-success");
  document.getElementById("passwordError").innerHTML="Password OK";
}
}
