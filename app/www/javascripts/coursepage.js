var toDo = []
function coursePage()
{
	var dx = JSON.parse(localStorage['course_data'])
	$(".course-title").append(dx.title)
	$(".courses-list").append('<li class="list-group-item" style ="text-align:center"> Starts At: ' + dx.coursemeetinfo[0].starttime+ "</li>")
	$(".courses-list").append('<li class="list-group-item" style ="text-align:center"> Ends At: ' + dx.coursemeetinfo[0].endtime+ "</li>")
	$(".courses-list").append('<li class="list-group-item" style ="text-align:center"> Location: ' + dx.coursemeetinfo[0].location+ "</li>")
	$(".courses-list").append('<li class="list-group-item" style ="text-align:center"> Days: ' + dx.coursemeetinfo[0].dow+ "</li>")

	}

function addToDo()
{
	toDo.append()
	//
	localStorage["toDo"] = toDo

}