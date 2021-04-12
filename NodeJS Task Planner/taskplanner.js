let http = require("http");
let url = require("url");
let fs = require("fs");

let port = 9999;
let taskInf0 = `
<h2>Welcome to Task Planner</h2><br/>
    <h2>Add Task</h2><br/>
    <form action="http://localhost:9999/store" method="get">
        <label>Emp Id</label>
        <input type="text" name="EmployeeID"/><br/>
        <label>Task Id</label>
        <input type="text" name="TaskID"/><br/>
        <label>Task Description</label>
        <input type="text" name="TaskDescription"/><br/>
        <label>DeadLine</label>
        <input type="date" name="DeadLine"/><br/>
        <input type="submit" name="Add Task" value="Add Task"/><br/>
        <input type="reset" name="Clear"/><br/>
        <input type="submit" name="Delete" value="Delete Task"/><br/>
        <input type="submit" name="List Task" value="List All Task"/><br/>
    </form>
`;

let emp = new Array();
let server = http.createServer((req, res) => {
  console.log(url.parse(req.url, true));
  var pathInfo = url.parse(req.url, true).pathname;
  if (pathInfo == "/") {
    res.setHeader("content-type", "text/html");
    res.end(buildHTML());
  }
  if (pathInfo == "/store") {
    var taskData = url.parse(req.url, true).query;
    console.log(
      `Emp Id: ${taskData.EmployeeID}, Task Id: ${taskData.TaskId}, Task Description: ${taskData.TaskDescription}, DeadLine: ${taskData.DeadLine} `
    );
    var fileRead = fs.readFileSync("empInfo.json");
    if (fileRead == "") {
      fs.writeFileSync("empInfo.json", JSON.stringify(emp, null, 2));
    } else {
      jsonData = JSON.parse(fileRead);
      jsonData.push(taskData);
      fs.writeFileSync("empInfo.json", JSON.stringify(jsonData));
    }

    res.setHeader("content-type", "text/html");
    res.end(buildHTML());
  } else if (req.url == "/display") {
    var fileRead = fs.readFileSync("empInfo.json");
    let jPrase = JSON.parse(fileRead);
    console.log(jPrase);
    var empTable = `
        <table border = "2">
            <tr>
                <th>Emp Id</th>
                <th>Task Id</th>
                <th>Task Description</th>
                <th>DeadLine</th>
            </tr>
            `;

    for (i = 0; i < jPrase.length; i++) {
      const element = jPrase[i];

      empTable += ` 


                    <tr>
                        <td>${element.EmployeeID}</td>
                        <td>${element.TaskId}</td>
                        <td>${element.TaskDescription}</td>
                        <td>${element.DeadLine}</td>
                    </tr>
                `;
    }
    empTable += `</table>`;
    res.end(empTable);
  }
});

function buildTable() {
  var fileRead = fs.readFileSync("empInfo.json");
  let jPrase = JSON.parse(fileRead);
  console.log(jPrase);
  var empTable = `
        <table border = "2">
            <tr>
                <th>Emp Id</th>
                <th>Task Id</th>
                <th>Task Description</th>
                <th>DeadLine</th>
            </tr>
            `;

  for (i = 0; i < jPrase.length; i++) {
    const element = jPrase[i];

    empTable += ` 


                    <tr>
                        <td>${element.EmployeeID}</td>
                        <td>${element.TaskID}</td>
                        <td>${element.TaskDescription}</td>
                        <td>${element.DeadLine}</td>
                    </tr>
                `;
  }
  empTable += `</table>`;
  return empTable;
}

function buildHTML() {
  return taskInf0 + buildTable();
}

server.listen(port, () => console.log(`Server Running on port number ${port}`));
