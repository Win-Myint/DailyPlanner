$(document).ready(function() {

	$('#add-task-form').on('submit', function(e) {
		addTask(e);
	});

	// Function adding task
	function addTask(e) {
		var task = $('#task').val();
		var taskPriority = $('#priority').val();
		var taskDate = $('#date').val();
		var taskTime = $('#time').val();

		// Validations
		if (task == '') {
			alert('Task can not be empty!');
			e.preventDefault();
		} else if (taskPriority == '' || taskPriority == 'Low') {
			e.preventDefault();
		} else if (taskDate == '') {
			alert('Please select date!');
			e.preventDefault();
		} else if (taskTime == '') {
			alert('Please select time!');
			e.preventDefault();
		} else {

		}
	}
});


