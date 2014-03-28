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
}

<<<<<<< HEAD
function addToDo()
{
	toDo.append()

	localStorage["toDo"] = toDo

}
function togglediv()
{
	$(".todo").toggle()

=======
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
>>>>>>> fe183e77e785c41c8a8e7ae49101a056a7dfc075
}