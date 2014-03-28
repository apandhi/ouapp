steoids.on('ready', function(){
  steroids.view.navigationBar.hide();
  alert();
});

function displayData($obj,data1)
{
  for(var x =0;x<data1.courses.length;x++)
  {
    $obj.append('<li class="list-group-item"><span class="badge">0</span>' + data1.courses[x].title + "</li>");
  }
}