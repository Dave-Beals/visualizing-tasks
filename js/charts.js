google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawStacked);

// console.log("script is working!")
//
var tasks = []
var personCount = {
  dave: 0,
  pickles: 0,
  daveAgain: 0,
}

function taskList(){
  event.preventDefault();
  var form = document.querySelector("form");
  var description = document.getElementById("taskDesc").value;
  var taskMaster = form.taskMaster.value;
  var difficulty = document.getElementById("difficulty").value;
  tasks.push(taskMaster, description, difficulty);

  nameTotals();
}

function nameTotals(){
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i] === "Dave")
      personCount.dave = personCount.dave + 1;
  }
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i] === "Pickles the Cat")
      personCount.pickles = personCount.pickles + 1;
  }
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i] === "Dave again")
      personCount.daveAgain = personCount.daveAgain + 1;
}

  drawStacked();
// presentTask();
}


// function presentTask(){
//   var parent = document.getElementById("container");
//   parent.innerHTML = "";
//   var ul = document.createElement("ul")
//   for(var i = 0; i < tasks.length; i++){
//     var newNode = document.createElement("li");
//     newNode.innerHTML = tasks[i];
//     ul.appendChild(newNode);
//   }
//   parent.appendChild(ul);
// }


function drawStacked(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Number of Tasks');
    data.addRows([
      ['Dave', personCount.dave],
      ['Pickles', personCount.pickles],
      ['Dave Again', personCount.daveAgain],
    ]);

    var options = {
         title: 'How Many Tasks Do You Have?',
         hAxis: {
           title: 'Name',
         },
         vAxis: {
           title: 'Number of Tasks'
         }
       };

       var chart = new google.visualization.ColumnChart(document.getElementById('personChart'));
       chart.draw(data, options);
     }
