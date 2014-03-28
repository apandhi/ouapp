function userLogin(username,password,endpoint,callback)
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
     xhrFields: {
        withCredentials: true
     },
     complete: callback
  }); 
}

function login(){
  userLogin($("#email").val(), $("#password").val(), "https://my.hofstra.edu/cp/home/login", function(xhr, statusText) { 
       var response = xhr.responseText;

       if(response&&response.indexOf("Error: Failed Login") == -1){
           //Logged in
           alert("Logged in");
           userLogin($("#email").val(), $("#password").val(), "https://my.hofstra.edu/cp/home/login", function(xhr, statusText) { 
              alert("Setting Session");
              $.get("https://my.hofstra.edu/cp/home/next", function(){
                getData();
              })
           });
       }else{
           //Not logged in
           alert("Failed");
          
       }
       
     } 
  });
}

function getData(){
  $.ajax({
     url: "https://my.hofstra.edu/applications/mobile/courses/getdata.jsp?_dc=" + Date.now(), 
     type: "GET",
     xhrFields: {
        withCredentials: true
     },
     complete: function(xhr, statusText) { 
       var response = xhr.responseText;
       console.log(response);
       
     } 
  }); 
}