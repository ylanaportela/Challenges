window.onload = function(){

  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    checkEmail()
  });

  document.querySelector("input").addEventListener("change", checkEmail)
}

function checkEmail(){
  const submitedEmail = document.querySelector("input").value;

  if ((submitedEmail !== ' ') && (submitedEmail.search("@") == -1 ) ){
    document.querySelector(".error-message").style.display = "block";
  } else {
    document.querySelector(".error-message").style.display = "none";
  }
}