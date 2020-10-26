

// noman 
function autoCom(e) {

    console.log($('#array').val())
    var b = $('#array').val();
    var strVale1 = b;
    var strArr1 = strVale1.split(',');
    var intArr1 = [];
    for (j = 0; j < strArr1.length; j++)
        intArr1.push(('"' + strArr1[j] + '"'));
    console.log(strArr1)
    var myArray = strArr1;
    var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);//this line of code preventing repeatation of items in array.
    console.log(unique)
    var availableTags = unique;
    $(".tags").autocomplete({
        source: availableTags
    });
}


$(document).ready(function () {
    var mood;
    mood = 'EXPNESE';
    var for_E_M_attr = { heading_1: "Things", id_1: "tags", class_tags1: "tags", placeholder_1: "things", name_1: "things", heading_2: "Description", name_2: "description", id_2: "description", heading_3: "Amount", id_3: "amount", placeholder_3: "item amount", name_3: "amount" }

    var for_W_M_attr = { heading_1: "Person", id_1: "person_tags", class_tags1: "person_tags", placeholder_1: "person", name_1: "person_name", heading_2: "Description", name_2: "description", id_2: "description", heading_3: "Amount", id_3: "amount", placeholder_3: "amount", name_3: "amount" }

    var dropDown = '<div class="form-group"> <label for="sel1"></label> <select class="form-control" id="sel1" name="sellist1"><option>Select Category</option> <% for (var i = 0; i < categories_.length; i++){ %> <option name="" value="<%= categories_[i].id %>" ><%= categories_[i].categories %></option> <% } %> </select> <br> </div>';
    var form_expense_mood = `<div class="mainDiv"> <div class="form-group">${dropDown}<label for="email">${for_E_M_attr.heading_1}:</label> <input type="text" class="form-control tags" onkeyup="PresTab(this)"  onfocus="autoCom(this)" id="${for_E_M_attr.id_1}" placeholder="${for_E_M_attr.placeholder_1}" name="${for_E_M_attr.name_1}"></div> <div class="form-group"><label for="email">${for_E_M_attr.heading_2}:</label><textarea class="form-control" rows="3" name="${for_E_M_attr.name_2}" id="${for_E_M_attr.id_2}"></textarea></div><div class="form-group"><label for="amount">${for_E_M_attr.heading_3}:</label><input type="text" class="form-control"  id="${for_E_M_attr.id_3}" placeholder="${for_E_M_attr.placeholder_3}" name="${for_E_M_attr.name_3}"></div> </div><button type="button" class="btn btn-danger" id="add">+</button><br><button type="submit" class="btn btn-primary">Submit</button>`;
    var form_wasoli_mood = `<div class="mainDiv"> <div class="form-group"> <label for="email">${for_W_M_attr.heading_1}:</label> <input type="text" class="form-control tags" onkeyup="PresTab(this)"  onfocus="autoCom(this)" id="${for_W_M_attr.id_1}" placeholder="${for_W_M_attr.placeholder_1}" name="${for_W_M_attr.name_1}"></div> <div class="form-group"><label for="email">${for_W_M_attr.heading_2}:</label><textarea class="form-control" rows="3" name="${for_W_M_attr.name_2}" id="${for_W_M_attr.id_2}"></textarea></div><div class="form-group"><label for="amount">${for_W_M_attr.heading_3}:</label><input type="text" class="form-control"  id="${for_W_M_attr.id_3}" placeholder="${for_W_M_attr.placeholder_3}" name="${for_W_M_attr.name_3}"></div> </div><button type="button" class="btn btn-danger" id="add">+</button><br><button type="submit" class="btn btn-primary">Submit</button>`;
    $('body form').html(form_expense_mood);

    $('body .toggle-on').attr("id", "expenses")
    $('body .toggle-off').attr("id", "wasoli")

    $('body #expenses').html("sub");
    $('body #wasoli').html("add");

    var a = 0;
    $('body').on('click', '#add', function () {

        var addIn = `<button type="button" onClick="rem(this)" class="btn btn-success remove" id="remove_' + a + '">-</button> <br> <div class="mainDiv_' + a + '"> <div class="form-group">${dropDown}<label for="email">${for_E_M_attr.heading_1}:</label> <input type="text" class="form-control tags" id="${for_E_M_attr.id_1}" placeholder="${for_E_M_attr.placeholder_1}" onfocus="autoCom(this)" name="${for_E_M_attr.name_1}"> </div> <?xml version="1.0"?> <div class="form-group"> <label for="email">${for_E_M_attr.heading_2}:</label> <textarea class="form-control" rows="3" name="${for_E_M_attr.name_2}" id="${for_E_M_attr.id_2}"/> </div> <div class="form-group"> </div> <div class="form-group"> <label for="amount">${for_E_M_attr.heading_3}:</label> <input type="text" class="form-control" id="${for_E_M_attr.id_3}" placeholder="${for_E_M_attr.placeholder_3}" name="${for_E_M_attr.name_3}"> </div> </div> <br>`;

        $(".mainDiv").append(addIn);

        a++;
    })

    $('body').on('click', '#add_', function () {

        var addIn = `<button type="button" onClick="rem(this)" class="btn btn-success remove" id="remove_' + a + '">-</button> <br> <div class="mainDiv_' + a + '"> <div class="form-group"> <label for="email">${for_W_M_attr.heading_1}:</label> <input type="text" class="form-control tags" id="${for_W_M_attr.id_1}" placeholder="${for_W_M_attr.placeholder_1}" onfocus="autoCom(this)" name="${for_W_M_attr.name_1}"> </div> <?xml version="1.0"?> <div class="form-group"> <label for="email">${for_W_M_attr.heading_2}:</label> <textarea class="form-control" rows="3" name="${for_W_M_attr.name_2}" id="${for_W_M_attr.id_2}"/> </div> <div class="form-group"> </div> <div class="form-group"> <label for="amount">${for_W_M_attr.heading_3}:</label> <input type="text" class="form-control" id="${for_W_M_attr.id_3}" placeholder="${for_W_M_attr.placeholder_3}" name="${for_W_M_attr.name_3}"> </div> </div> <br>`;
        $(".mainDiv").append(addIn);

        a++;
    })


    $('body').on("click", "#expenses", function () {


        if (!$('table').length) {
            console.log("expenses", "table does not exist.");
            $('body h2').html("Recieving Mood");
            $('body form').attr("action", "/wasoli");
            $('body form').html(form_wasoli_mood);
            $($("body button")[1]).attr("id", "add_");
            mood = 'RECEIVING';
        }
        if ($('table').length) {
            $('#report_heading').html('Receriving Report')
            $('select').hide()
            console.log('expnese', 'table exist')

            receiving_table();//ajax CALL
        }


    })

    $('body').on("click", "#wasoli", function () {

        if (!$('table').length) {
            console.log("wasoli", "table does not exist.");
            $('body h2').html("Expenses Mood");
            $('body form').attr("action", "/auto");
            $('body form').html(form_expense_mood);
            $($("body button")[1]).attr("id", "add");
            mood = 'EXPNESE';
        }
        if ($('table').length) {
            $('#report_heading').html('Expense Report')
            $('select').show();
            console.log('wasoli', 'table exist');

            expense_table();//ajax CALL
        }

    })


    $('body').on('click', 'button[type="submit"]', function (e) {
        var a = confirm(`you are set on ${mood} mood`);
        if (a) { console.log('ok') }
        if (!a) { e.preventDefault(); }
    })

    var rotat;

    $('select').on('change', function () {
        var value = $('select').find(":selected").attr("id");

        $.ajax({
            url: `/filter/${value}`,
            dataType: 'json',
            type: 'post',
            success: function (response) {

                db_restult = [];
                db_restult = response.data;
                console.log("db_result", db_restult)
                for (var i = 0; i < db_restult.length; i++) {

                    rotat += `<tr><td>${[i]}</td> <td>${db_restult[i].things}</td> <td>${db_restult[i].description}</td> <td>${db_restult[i].amount}</td> <td><button type="button" class="btndelete btnDelete" id=${db_restult[i].id} >Delete</button> <button type="button" class="btndelete btnDelete"  id=${db_restult[i].id} >Update</button></td></tr>`;

                }

                console.log("rotate", rotat)

                $('tbody').html(`${rotat}`);
                rotat = "";

            },
            error: function (error) {
                console.log(error);
            }


        })
    });

    function receiving_table() {
        $.ajax({
            url: `/api/report/receiving`,
            dataType: 'json',
            type: 'post',
            success: function (response) {
                console.log(response.db_restult[0])
                /////////
                db_restult = [];
                db_restult = response.db_restult[0];
                console.log("db_result", db_restult)
                for (var i = 0; i < db_restult.length; i++) {

                    rotat += `<tr><td>${db_restult[i].amount_id}</td> <td>${db_restult[i].person_name}</td> <td>${db_restult[i].description}</td> <td>${db_restult[i].amount}</td> <td><button type="button" class="btndelete btnDelete" id=${db_restult[i].id}>Delete</button><button type="button" class="btndelete btnDelete" id=${db_restult[i].id}>Update</button></td></tr>`;

                }

                console.log("rotate", rotat)

                $('tbody').html(`${rotat}`);
                rotat = "";
                //////////
            },
            error: function (error) {
                console.log(error);
            }
        })
    }
    ////////////
    function expense_table() {
        $.ajax({
            url: `/api/report/expense/on/ajax`,
            dataType: 'json',
            type: 'post',
            success: function (response) {
                console.log(response.db_restult)
                /////////
                console.log(response.db_restult)
                /////////
                db_restult = [];
                db_restult = response.db_restult;
                console.log("db_result", db_restult)
                for (var i = 0; i < db_restult.length; i++) {

                    rotat += `<tr><td>${[i]}</td> <td>${db_restult[i].things}</td> <td>${db_restult[i].description}</td> <td>${db_restult[i].amount}</td> <td>  <button type="button" class="btndelete btnDelete" id=${db_restult[i].id}>Delete</button><button type="button" class="btndelete btnDelete" id=${db_restult[i].id}>Update</button></td></tr>`;

                }

                console.log("rotate", rotat)

                $('tbody').html(`${rotat}`);
                rotat = "";

                ////////////
            },
            error: function (error) {
                console.log(error);
            }
        })
    }

})


