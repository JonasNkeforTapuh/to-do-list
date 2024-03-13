document.addEventListener("DOMContentLoaded", function() {
  // Array of initial tasks
  var initialTasks = ["Home", "About", "Courses", "Gallery"];

  // Function to add tasks
  function addTask(taskText) {
    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
  }

  // Adding initial tasks
  initialTasks.forEach(function(task) {
    addTask(task);
  });

  // Function to handle adding new tasks
  function handleAddTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }

  // Event listener for add task button
  document.getElementById("addTaskBtn").addEventListener("click", handleAddTask);
});
