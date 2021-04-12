let http = require("http");
let url = ("url");
let fs = require("fs");

let port = 9091;
let taskInf0 = `
<h2>Welcome to Task Planner</h2><br/>
    <h2>Add Task</h2><br/>
    <form action="http://localhost:9091" method="get">
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
`

let empArray = new Array();

let server = http.createServer((req,res)=>{
    console.log(req.url)
    if (req.url != "/favicon.ico"){

    }
})