//function display(){
  //  alert("Welcome to the Finance Overview")
//}

var details =[];
var totalbudget;
totalbudget=parseInt(0);
function formsubmit(){
    var data = toadddetails();
    insertNewRecord(data);
    details.push(data);
    total(data);
    resetData();
}



function toadddetails() {
    var obj = {}    // empty object
    obj.Name = document.getElementById("Name").value;
    obj.ClientName = document.getElementById("ClientName").value;
    obj.Budget = document.getElementById("Budget").value;
    console.log(obj);
    return obj; 
}
function insertNewRecord(data){
 var table = document.getElementById("FinanceOverview")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // row created 

 var cell1 = newRow.insertCell(0);          // cell created 
 cell1.innerHTML=data.Name;                 // value placed 

 var cell2 = newRow.insertCell(1);          // cell created 
 cell2.innerHTML=data.ClientName;                 // value placed

 var cell3 =newRow.insertCell(2);
 cell3.innerHTML=data.Budget; 
}

function resetData() {
document.getElementById("Name").value="";
document.getElementById("ClientName").value="";
document.getElementById("Budget").value="";
}

function total(data){
        totalbudget = parseInt(data.Budget) + parseInt(totalbudget);
        document.getElementById("total").innerHTML=totalbudget;
}



