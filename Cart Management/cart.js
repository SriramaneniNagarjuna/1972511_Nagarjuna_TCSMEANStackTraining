var cartdetails =[];
var x;
x = parseInt(0);
var totalcount;
totalcount = parseInt(0);


function addtocart(x){
    console.log(x);
    var data = toadddetails(x);
    insertNewRecord(data);
    //total(data);
}
function toadddetails(x){
    var data = {}
    var y;
    if (x==1){
        y = 'd1';
    } 
    else if (x==2){
        y = 'd2';
    } else if (x ==3){
        y = 'd3';
    } else if (x==4){
        y = 'd4';
    } else if (x==5){ 
        y = 'd5';
    }
    console.log(y);
    data = document.getElementById(y).innerHTML;
    console.log(data);
    return data;

}
function insertNewRecord(data){
    var table = document.getElementById("d6")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);
    totalcount = totalcount + 1;
    total.innerHTML=totalcount;

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=data;

   // var cell1 = newRow.insertCell(1);
    //cell1.innerHTML=data.d2;
    //var cell1 = newRow.insertCell(2);
    //cell1.innerHTML=data.d3;
    //var cell1 = newRow.insertCell(3);
    //cell1.innerHTML=data.d4;
    //var cell1 = newRow.insertCell(4);
    //cell1.innerHTML=data.d5;
    console.log('commes',table)
}







