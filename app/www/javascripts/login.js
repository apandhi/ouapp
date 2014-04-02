var courses = new steroids.views.WebView("courses.html");

$(function(){
  if(localStorage['remember']){
    $("#email").val(localStorage['username']);
    $("#password").val(localStorage['password']);
    $("#remember").prop('checked', true);
  }
});

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
           userLogin($("#email").val(), $("#password").val(), "https://my.hofstra.edu/cp/home/login", function(xhr, statusText) { 
              $.get("https://my.hofstra.edu/cp/home/next", function(){
                getData(function(data){
                  //Pass along the cookies to hofstra online
                  $.get("https://my.hofstra.edu/cp/ip/login?sys=sct&url=https://hofstraonline.hofstra.edu/pls/HPRO/twbksite.P_DispSiteMap?menu_name_in=bmenu.P_MainMnu", function(){
                    $.get("https://hofstraonline.hofstra.edu/pls/HPRO/twbksite.P_DispSiteMap?menu_name_in=bmenu.P_MainMnu", function(){
                      localStorage['user_data'] = data;
                      if($("#remember").prop('checked')){
                        localStorage['username'] = $("#email").val();
                        localStorage['password'] = $("#password").val();
                        localStorage['remember'] = true;
                      }else{
                        localStorage['remember'] = false;
                      }
                      steroids.view.navigationBar.hide();
                      steroids.layers.push(courses);
                    })
                  })
                });
              });
           });
       }else{
           //Not logged in
           alert("Could Not Log In");
       }
       
  });
}

function getData(callback){
  $.ajax({
     url: "https://my.hofstra.edu/applications/mobile/courses/getdata.jsp?_dc=" + Date.now(), 
     type: "GET",
     xhrFields: {
        withCredentials: true
     },
     complete: function(xhr, statusText) { 
       var response = xhr.responseText;
       callback(response);
       
     } 
  }); 
}