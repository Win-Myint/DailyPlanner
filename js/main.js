$(document).ready(function() {

	$('#add-task-form').on('submit', function(e) {
		addTask(e);
	});



	// Function adding task
	function addTask(e) {

		// localStorage.removeItem('tasks');
		// Add unique id
		var newDate = new Date();
		var id = newDate.getTime();
		var task = $('#task').val();
		var taskPriority = $('#priority').val();
		var taskDate = $('#date').val();
		var taskTime = $('#time').val();

		// Validation
		if (task == '') {
			alert('Task can not be empty!');
			e.preventDefault();
		} else if (taskPriority == '') {
			taskPriority == 'Low';
		} else if (taskDate == '') {
			alert('Please select date!');
			e.preventDefault();
		} else if (taskTime == '') {
			alert('Please select time!');
			e.preventDefault();
		} else {

			// First check to see if there any tasks available
			// I want it in object format so i used JSON.parse to convert tasks into object
			var tasks = JSON.parse(localStorage.getItem('tasks'));

			// Check if there is any tasks
			// If not, set it to empty array
			if (tasks == null) {
				tasks = [];
			}

			// Take all value passed down from form.submit and 
			// put them in a newTask object
			var newTask = {
				'id' : id,
				'task' : task,
				'taskPriority' : taskPriority,
				'taskDate' : taskDate,
				'taskTime' : taskTime
			}

			tasks.push(newTask);

			// now it's ready to store added tasks into the localStorage object
			// localStorage only stores string
			// So i used JSON.stringify
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}
});


