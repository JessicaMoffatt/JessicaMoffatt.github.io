$(document).ready(function () {

    $("#rental_form_submit").click(function () {
        var choice = $('input:radio[name=rental_choice]:checked');
        var choice_id = $('input:radio[name=rental_choice]:checked').attr('id');

        var day_selection = parseFloat($("#slide_period").val());

        var choice_price = choice.val();
        choice_price = parseFloat(choice_price);

        var rental_vehicle;

        var rental_options = "";

        var total_rental_price = parseFloat(0);//total of all values
        var GST = 1.05;

        var name;
        var address;
        var state;
        var email;
        var phone;

        var resultmessage;

        //determine rental vehicle choice
        if (choice_id == 'radio_mid') {
            rental_vehicle = "Mid-Size ";
        } else if (choice_id == 'radio_luxury') {
            rental_vehicle = "Luxury ";
        } else if (choice_id == 'radio_van') {
            rental_vehicle = "Van ";
        } else if (choice_id == 'radio_truck') {
            rental_vehicle = "Truck ";
        } else if (choice_id == 'radio_compact') {
            rental_vehicle = "Compact ";
        }

        //add on rental_options
        if ($("#radio_roof_rack").prop("checked")) {
            total_rental_price += parseFloat(($("#radio_roof_rack").val()));
            rental_options += "Roof Rack " + "     "
        }
        if ($("#radio_bike_rack").prop("checked")) {
            total_rental_price += parseFloat(($("#radio_bike_rack").val()));
            rental_options += "Bike Rack " + "     ";
        }
        if ($("#radio_gps").prop("checked")) {
            total_rental_price += parseFloat(($("#radio_gps").val()));
            rental_options += "GPS " + "     ";
        }
        if ($("#radio_child_seat").prop("checked")) {
            total_rental_price += parseFloat(($("#radio_child_seat").val()));
            rental_options += "Child Seat " + "     ";
        }

        //add on rental vehicle choice price
        total_rental_price += choice_price;

        //multiply by days renting
        total_rental_price = total_rental_price * day_selection * GST;


        //get info from text fields
        name = $("#customer_name").val();
        address = $("#customer_address").val();
        state = $("#customer_state").val();
        email = $("#customer_email").val();
        phone = $("#customer_phone").val();

        //fix rental_options if it is empty
        if(rental_options === ""){
            rental_options = "None";
        }

        resultmessage = ( "RENTAL SUMMARY" + "\n\n" + name + " " + "\n" + address + ", " + state + "\n" + phone + "\n" + email + "\n\n" + "Vehicle Choice: " + rental_vehicle + "\n" + "Vehicle Options: " + rental_options + "\n" + "Days Renting: " + day_selection + "\n" + "Total Cost (GST INCLUDED): $" + total_rental_price.toFixed(2));

        if(rental_vehicle != null){
            window.alert(resultmessage);
        }
        else{
            window.alert("Please select a car to rent before submitting.")
        }
    });


});