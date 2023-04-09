//console.log(userEmail);
function submit() {
    var userName = document.getElementById("exampleInputEmail1").value;
    var userEmail = document.getElementById("exampleInputEmail12").value;
    var usermessage = document.getElementById("message1").value;
  
    var pattern = /^[a-zA-z]{3,}\s[a-zA-z]{3,}$/;

    //var result = pattern.test(userName);
    if (pattern.test(userName) == true) {
      alert(`Welcome ${userName} in ITI Project😀😀` );
    } else {
      alert("Invalid data");
    }

    var pattern1 = /^([a-zA-Z0-9\.-]+)@([a-zA-Z\.]+)(com)$/g;
    if (pattern1.test(userEmail) == true) {
      alert("Valid Email");
    } else {
      alert("Invalid data");
    }
    if (usermessage == "") {
      alert("Invalid data");
    } else {
      alert("Your Message sent successfully!");
    }
    console.log(userName);
  }
