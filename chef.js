let arr = [];
var input = "";

$('#save').click(function () {
    event.preventDefault();
    let dish = $('#dish').val();
    let recipe = $('#recipe').val();
    // let ingradient = $('#ingradient').val();
    let file = $('#file').val();
    if (dish != "" && recipe != ""  && file != "") {



        obj = {
            dish: dish,
            recipe: recipe,
            file: file

        }

        arr.push(obj);
        add();
    }
    else {
        alert('**Please fill all the details');
    }

    $('#dish').val("");
    $('#recipe').val("");
    // $('#ingradient').val("");
    $('#file').val("");
$('#dname').val('');



    add();

    //    $("#myModal").modal({ hide: true });



})


function add() {
    $('#table tbody').empty();
    for (let i = 0; i < arr.length; i++) {

        let tr = "";
        // debugger;
        tr = `<tr><td>${arr[i].dish}</td><td>${arr[i].recipe}</td>
             <td>${arr[i].file}</td>
            <td><button class="btn btn-danger" onclick="Remove(${i})">Remove</button>
          </td><td><button class="btn btn-success edit" onclick="Edit(${i})" data-toggle="modal" data-target="#myModal" id="${i}">Edit</button></td>
          <td><button class="btn btn-primary" onclick="dish(${i})" data-toggle="modal" data-target="#new">Add_Ingradient</button></td></tr>`
        // debugger;
        $('#table tbody').append(tr);
    }
    // $('.dlt-btn').on('click', function() {
    //     let id = $(this).attr('attr-id');
    //     Delete(id);
    //     debugger

    // })
    local();
}
console.log(arr);
function Remove(i) {

    // arr = arr.filter((v, index) => index != i);
    arr.splice(i, 1);
    add();
}

function local() {
    var obj1 = JSON.stringify(arr)
    localStorage.setItem('arr', obj1)
    localStorage.getItem(JSON.parse(obj1))
}


function Edit(item) {
    input=item;
  
    
    $('#dish').val(arr[item].dish);
    
    $('#recipe').val(arr[item].recipe);
    // $('#ingradient').val(arr[item].ingradient);
    $('#file').val(arr[item].file);

    $('.edit').click(function () {
        $('.Update').show();        // debugger
        // $("#myModal").modal({ show: true });

    })



}


function Update() {


    var data = {};
    data['dish'] = $('#dish').val();
    data['recipe'] = $('#recipe').val();
    // data['ingradient'] = $('#ingradient').val();
    data['file'] = $('#file').val();
    arr.splice(input, 1, data);
    console.log(arr);


    $('#dish').val("");
    $('#recipe').val("");
    // $('#ingradient').val("");
    $('#file').val("");

    add();

}



$('#search').on('keyup', function () {
    let value = $(this).val().toLowerCase();
    $('#table tr').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    })
    let val = $(this).val().toLowerCase();
    $('#tbl tr').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1)
    })

})

// b=$('#dish').val(arr[item].dish);


function dish(e){
   
    console.log('worked');

    $('#dname').val(arr[e].dish);
    
  }





let temp = [];

$('#push').click(function () {
    
    let dname = $('#dname').val();
    let name = $('#name').val();
    let get = $('#get').val();
    let select = $('#select').val();
    console.log(get);

if(dname!="" && name!="" && get!="" && select!=""){
    rat = {
        dname:dname,
        name: name,
        get: get,
        select: select
    }
    temp.push(rat);
    call();
  }
  else
  {
      alert('please enter the feilds')
  }
  

    call();
    $('#dname').val("");
    $('#name').val("");
    $('#get').val("");
    $('#select').val("");

})

function call() {
    $('tbody').empty();

    for (let j = 0; j < temp.length; j++) {
        var p = "";
        p = `<tr><td>${temp[j].dname}</td><td>${temp[j].name}</td><td>${temp[j].get}</td><td>${temp[j].select}</td>
        <td><button class="btn btn-success" onclick="edit1(${j})" data-toggle="modal" data-target="#new">Edit</button></td>
        <td><button class="btn btn-danger" onclick="Delete1(${j})" >Delete</button></td></tr>`

        $('#tbl tbody').append(p);



    }
    demo();

}
function demo() 
{
    var render = JSON.stringify(temp);
    localStorage.setItem('temp', render);
    localStorage.getItem(JSON.parse(render))
    console.log(render);
}

function Delete1(j) {
  
    temp.splice(j, 1)
    call();
}
let c="";
function edit1(t) {
    c=t;
    $('#dname').val(temp[t].dname);
    $('#name').val(temp[t].name);
    $('#get').val(temp[t].get);
    $('#select').val(temp[t].select);
    

}
function update1() {
    let a = {}
    debugger;

    a['dname'] = $('#dname').val();
    a['name'] = $('#name').val();
    a['get'] = $('#get').val();
    a['select'] = $('#select').val();
    debugger;
    temp.splice(c,1,a);


    $('#dname').val("");
    $('#name').val("");
    $('#get').val("");
    $('#select').val("");
    
    call();
}

function final() {

    add();
    
  

}


