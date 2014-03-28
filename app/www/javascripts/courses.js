function displayData($obj,data1)
{
  for(var x =0;x<data1.courses.length;x++)
  {
    $obj.append('<li class="list-group-item course-item" data-course=\'' + JSON.stringify(data1.courses[x]) + '\'style="text-align:left"><span class="badge">0</span>' + data1.courses[x].title + "</li>");
  }

  $(".course-item").click(function(){
    alert($(this).data('course'));
    localStorage['course_data'] = $(this).data('course');
    steroids.view.layers.push(new steroids.views.WebView("coursepage.html"));
  })
}

<<<<<<< HEAD
$(function(){
    $(".courses-list").html("");
    displayData($(".courses-list"),JSON.parse(localStorage["user_data"]))
    steroids.view.navigationBar.hide();
})
=======
function onVisibilityChange() {
    if(!document.hidden){
        displayData($(".courses-list"),JSON.parse(localStorage["user_data"]))
        steroids.view.navigationBar.hide();
    }
}

>>>>>>> FETCH_HEAD
