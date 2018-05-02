$(document).ready(function(){

    var input;

    var name;
    var address;
    var state;
    var email;
    var phone;

    var full_list;

    //reset values at beginning of page load
    $("#customer_name").val("");
    $("#customer_address").val("");
    $("#customer_state").val("");
    $("#customer_email").val("");
    $("#customer_phone").val("");
    $("#searchval").val("");


    doSomething = function(table_row){
        if(typeof table_row != 'undefined'){
            var test = table_row.getElementsByTagName("td")[0].innerText;
        }else{
            var test = table_row;
        }
        console.log(test);
        $.each(full_list, function(index, element) {
            var last_name = element.last_name;
            if(last_name === test){
                name = element.first_name + " " + element.last_name;
                address = element.address;
                state = element.state_prov;
                email = element.email;
                phone = element.phone;
                return false;
            }
        });
        displayForm();
    }

    $('#searchval').keyup(function(){
        $.getJSON('rentalclients.json', null, function(data) {
            input = $('#searchval').val();
            full_list = data;
            processDataName(full_list, input);
        });
    });

    function processDataName(data, input){
        var tbody = document.getElementById('result_table');
        tbody.innerHTML = "";
        var tr1 = document.createElement('tr');
        var thLast = document.createElement('th');
        thLast.innerHTML = "Last Name";
        var thFirst = document.createElement('th');
        thFirst.innerHTML = "First Name";

        tr1.appendChild(thLast);
        tr1.appendChild(thFirst);
        tbody.appendChild(tr1);

        $.each(data, function(index, element) {
            var last_name = element.last_name;
            if(input === ""){
                $("#result_table").html("");
            }
            else if(last_name.toLowerCase().startsWith(input.toLowerCase())){
                printRow(element,tbody);
            }
        });
    }

    function displayForm(){
        //make form editable now
        $("#customer_name").prop('disabled', false);
        $("#customer_address").prop('disabled', false);
        $("#customer_state").prop('disabled', false);
        $("#customer_email").prop('disabled', false);
        $("#customer_phone").prop('disabled', false);
        $("#radio_compact").prop('disabled', false);
        $("#radio_mid").prop('disabled',false);
        $("#radio_luxury").prop('disabled',false);
        $("#radio_van").prop('disabled', false);
        $("#radio_truck").prop('disabled', false);
        $("#radio_roof_rack").prop('disabled', false);
        $("#radio_bike_rack").prop('disabled', false);
        $("#radio_gps").prop('disabled', false);
        $("#radio_child_seat").prop('disabled', false);
        $("#slide_period").prop('disabled', false);
        $("#rental_form_submit").prop('disabled', false);


        $("#customer_name").val(name);
        $("#customer_address").val(address);
        $("#customer_state").val(state);
        $("#customer_email").val(email);
        $("#customer_phone").val(phone);
    }

    function printRow(element, tbody){
        var tr = document.createElement('tr');
        var tdLast = document.createElement('td');
        tdLast.innerHTML = element.last_name;
        tr.appendChild(tdLast);
        var tdFirst = document.createElement('td');
        tdFirst.innerHTML = element.first_name;
        tr.appendChild(tdFirst);
        var row_id = element.last_name;
        //https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
        row_id = row_id.replace(/\s+/g, '');
        tr.setAttribute('id', row_id);
        var customer_id = tr.getAttribute('id');
        tr.setAttribute('onclick', 'doSomething(' + customer_id + ')');
        tbody.appendChild(tr);
    }

});