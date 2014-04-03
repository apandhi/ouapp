steroids.view.navigationBar.hide({ animated: true });

function getDutchDebits(callback){

    $.get("https://hofstraonline.hofstra.edu/pls/HPRO/hzskwebe.P_Webebill", function(data) { 
    	if(data.indexOf('var userDetails = "";') == -1){
    		//Logged In
    		var id = $(data).find("input[name='ID']").val();
    		var pass = $(data).find("input[name='PW']").val().substring(0,4);

    		var toSend = {
				"acnt_1": id,
				"acnt_2": pass,
				"PASSLEN":4,
				"PASS":"PASS",
				"PASS":"PASS",
				"STATUS":"STATUS",
				"FINDATAREP":"on"
			};


			$.post("https://hofcardweb.hofstra.edu/1card/scripts/OneWeb67.exe", toSend, function(res){
				try{
					var amount = $(res).find("#oneweb_balance_information_td_amount").last().find("b5").html().split("$")[1].trim();
					callback(amount);
				}catch(e){
					alert("Something went wrong");
				}
			});

    	}else{
    		//Not logged in
    		alert("Error: You are not logged in");
    	}
    })
}

$(function(){
	getDutchDebits(function(amount){
		$("#amount").html("$" + amount);
	});
})
var courses = new steroids.views.WebView("courses.html");
	courses.preload();

function showCourses()
{
	
	steroids.layers.push(courses);

}

function showHome()
{
	steroids.layers.push(new steroids.views.WebView("courses.html"));
}
