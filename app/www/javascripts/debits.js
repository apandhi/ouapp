steroids.view.navigationBar.show("Dutch Debits");

function getDutchDebits(callback){

    $.get("https://hofstraonline.hofstra.edu/pls/HPRO/hzskwebe.P_Webebill", function(data) { console.log(data) })

	

    $.ajax({
     url: "https://my.hofstra.edu/cp/ip/login?sys=bannerenc&url=https%3A//hofcardweb.hofstra.edu/1card/scripts/OneWeb67.exe" + Date.now(), 
     type: "GET",
     xhrFields: {
        withCredentials: true
     },
     complete: function(xhr, statusText) { 
       var data = xhr.responseText;
       console.log(data);
		if(data.indexOf("https://my.hofstra.edu/jsp/misc/timedout.jsp") == -1){
			//User is logged in - we can fetch their debits
			var start = data.indexOf("Username + \"' value='") + 21; 
			var stop = data.indexOf("'", start);
			var id = data.substring(start, stop); //Stores User ID

			start = data.indexOf("Password + \"' value='") + 21;
			var pass = data.substring(start, start + 4); //4 Char Pass

			var toSend = {
				"acnt_1": id,
				"acnt_2": pass,
				"PASSLEN":4,
				"PASS":"PASS",
				"PASS":"PASS",
				"STATUS":"STATUS",
				"FINDATAREP":"on"
			};

			console.log(toSend);

			$.post("https://hofcardweb.hofstra.edu/1card/scripts/OneWeb67.exe", toSend, function(res){
				try{
					console.log(res);
					var amount = $(res).find("#oneweb_balance_information_td_amount").html().trim();
					callback(amount);
				}catch(e){
					alert("Something went wrong");
				}
			});

		}else{
			//Show login screen
			alert("Error, You are not logged in");
		}
     } 
  }); 
}

function setCookie(name, value)
{
  var argv = document.setCookie.arguments;
  var argc = document.setCookie.arguments.length;
  var expires = (argc > 2) ? argv[2] : null;
  var path = (argc > 3) ? argv[3] : null;
  var domain = (argc > 4) ? argv[4] : null;
  var secure = (argc > 5) ? argv[5] : false;
  document.cookie = name + "=" + escape (value) +
  ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
  ((path == null) ? "" : ("; path=" + path)) +
  ((domain == null) ? "" : ("; domain=" + domain)) +
  ((secure == true) ? "; secure" : "");
} 

document.setCookie = setCookie;

$(function(){
	getDutchDebits(function(amount){
		$("#amount").html("$" + amount);
	});
})