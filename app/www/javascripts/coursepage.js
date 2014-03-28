var toDo = []
var courseName;
function coursePage()
{
	var dx = JSON.parse(localStorage['course_data'])
	$(".course-title").append(dx.title)
	courseName = dx.name.replace(" ", "");
	for(var i = 0; i < dx.coursemeetinfo.length; i++){

		$(".courses-list").append('<li class="list-group-item" style ="text-align:center">' + dx.coursemeetinfo[i].dow + ' ' + dx.coursemeetinfo[i].starttime + " - " + dx.coursemeetinfo[i].endtime + "</li>")
		$(".courses-list").append('<li class="list-group-item" style ="text-align:center">' + dx.coursemeetinfo[i].location+ "</li>")

	}

	var todos = getToDo();
	for(var i = 0; i < todos.length; i++){
		renderToDo(todos[i].title, todos[i].comment, todos[i].due);
	}
}

function addToDo()
{
	toDo.append()

	localStorage["toDo"] = toDo

}
function togglediv()
{
	$(".todo").toggle()

}

function renderToDo(title, comment, due){
	if(due == ""){
		due = "Unknown";
	}
	$(".todo-list").append("<li class='list-group-item'><strong>" + title + "</strong><br>" + comment + "<br>Due: " + due + "</li>");
}

function saveToDo(){
	addToDo($("#title").val(), $("#comments").val(), $("#due").val());
}

function addToDo(title, comment, due){
	var data;
	try{
		data = JSON.parse(localStorage[courseName]);
	}catch(e){
		data = [];
	}

	data.push({
		"title": title,
		"comment": comment,
		"due": due
	});
	localStorage[courseName] = JSON.stringify(data);
	renderToDo(title, comment, due);
	togglediv();
	return data;
}

function getToDo(){
	var data;
	try{
		data = JSON.parse(localStorage[courseName]);
	}catch(e){
		data = [];
	}
	return data;
}