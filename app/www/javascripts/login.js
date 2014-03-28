function userLogin(username,password,endpoint)
{
  var data = {
     user: username,
     pass: password,
     uuid:"0xACA021" //Never changes?
  }

  $.ajax({ 
     url: endpoint, 
     data: data,
     type: "POST",
     complete: function(xhr, statusText) { 
       var response = xhr.responseText;

       if(response&&response.indexOf("Error: Failed Login") == -1){
           //Logged in
           alert("Logged in");
       }else{
           //Not logged in
           alert("Failed");
       }
       
     } 
  }); 
}

function login(){
  userLogin($("#email").val(), $("#password").val(), "https://my.hofstra.edu/cp/home/login?_dc=1395968951166")
}