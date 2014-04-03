function displayData($obj,data1)
{
  for(var x =0;x<data1.courses.length;x++)
  {
    var courseName = data1.courses[x].name.replace(" ", "");
    var data;
    try{
      data = JSON.parse(localStorage[courseName]);
    }catch(e){
      data = [];
    }
    $obj.append('<li class="list-group-item course-item" data-course=\'' + JSON.stringify(data1.courses[x]) + '\'style="text-align:left"><span class="badge">' + data.length + '</span>' + data1.courses[x].title + "</li>");
  }

  $(".course-item").click(function(){
    //alert($(this).data('course'));
    localStorage['course_data'] = JSON.stringify($(this).data('course'));
    steroids.layers.push(new steroids.views.WebView("coursepage.html"));
  })
}

$(function(){
    $(".courses-list").html("");
    displayData($(".courses-list"),JSON.parse(localStorage["user_data"]))
})

var debits = new steroids.views.WebView("mealpoints.html");
debits.preload();

function showDebits(){
    steroids.layers.push(debits);
}
<<<<<<< HEAD
=======

document.addEventListener("visibilitychange", onVisibilityChange, false);

function onVisibilityChange() {
  setTimeout(function(){
    if(document.visibilityState == "visible"){
      steroids.view.navigationBar.hide();
    }
  }, 50)
}

steroids.on('ready', function(){
  onVisibilityChange();
});
>>>>>>> 15614cb348ef9f09460bea517f82ff32c97383ed
