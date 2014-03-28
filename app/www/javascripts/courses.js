function displayData($obj,data1)
{
  for(var x =0;x<data1.courses.length;x++)
  {
    $obj.append('<li class="list-group-item" style ="text-align:left"><span class="badge">0</span>' + data1.courses[x].title + "</li>");
  }
}

function onVisibilityChange() {
    if(!document.hidden){
        displayData($(".courses-list"),JSON.parse(localStorage["user_data"]))
        steroids.view.navigationBar.hide();
    }
}