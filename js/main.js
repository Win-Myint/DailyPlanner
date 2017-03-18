$(document).ready(function() {

	$('#add-task-form').on('submit', function(e) {
		addTask(e);
	});

	// Function adding task
	function addTask(e) {

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
			var newTask = {
				'id' : id,
				'task' : task,
				'taskPriority' : taskPriority,
				'taskDate' : taskDate,
				'taskTime' : taskTime
			}
			// put them in a newTask object
			tasks.push(newTask);

			// now it's ready to store added tasks into the localStorage object
			// localStorage only stores string
			// So i used JSON.stringify
			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}

	// Function to display task
	function displayTasks() {

		// Grab tasks passed down from function addTask()
		var tasksToDisplay = JSON.parse(localStorage.getItem('tasks'));

		if (tasksToDisplay != null) {
			// Call array.sort(callback) function 
			tasksToDisplay = tasksToDisplay.sort(sortByTime);
		}

		// Set counter
		var i = 0;
		// Check tasks
		if(localStorage.getItem('tasks') != null) {
			// Loop through using jQuery.each method then display using append()
			$.each(tasksToDisplay, function(key, value) {
				$('#task-table').append(
					'<tr id="' + value.id + '">' +
					'<td>' + value.task + '</td>' +
					'<td>' + value.taskPriority + '</td>' +
					'<td>' + value.taskDate + '</td>' +
					'<td>' + value.taskTime + '</td>' +
					'<td><a href="edit.html?id='+ value.id +'">Edit</a> | <a hret="#" id="remove-task">Remove</td>' +
					'</tr>');
			})
		}
	}

	// sortByTime function
	function sortByTime(a, b) {
		var aTime = a.task_time;
		var bTime = b.task_time;
		// tenary operator
		return ((aTime < bTime) ? -1 : ((aTime > bTime) ? 1 : 0));
	}

	displayTasks();

});