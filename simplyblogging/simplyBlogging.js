var block1 = [];


function addblog(){
    getData();
    var store = getData();
    insertData(store);
    //block1.push(store);
    resetData();
}

function getData(){
    var obj = {}
    obj.name = document.getElementById("nameid").value;
    obj.title = document.getElementById("titleid").value;
    obj.email = document.getElementById("emailid").value;
    obj.desc = document.getElementById("descid").value;
    obj.image = document.getElementById("imageid").src=imageid;
    console.log(obj);
    return obj;
}

function insertData(store){
    var box = document.getElementById("display")
    var body = document.getElementById("display1")[0];
    var newrow = body.insertRow(body.length);

    var line1 = newrow.insertcell(0);
    line1.innerHTMl=store.nameid;












    //var box = document.getElementById("output")
    //box.innerHTML=store.name;
    //var box1 = document.getElementById("output1")
    //box1.innerHTML=store.title;
    //var box2 = document.getElementById("output2")
    //box2.innerHTML=store.email;
    //var box3 = document.getElementById('output3')
    //box3.innerHTML=store.desc
}

function resetData(){
    document.getElementById("nameid").value="";
    document.getElementById("titleid").value="";
    document.getElementById("emailid").value="";
    document.getElementById("descid").value="";
    document.getElementById("imageid").value="";
}