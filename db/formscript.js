$( document ).ready(function() {

    var default_photo;
    $("#day_period").text($("#slide_period").val());

    $('input[type=radio][name=rental_choice]').change(function() {
        if (this.id == 'radio_compact') {
            default_photo = "<img src=\"compact.jpg\" atl=\"Compact\">";
            $("#car_image").html(default_photo);
        }
        else if (this.id == 'radio_luxury') {
            default_photo = "<img src=\"luxury.jpg\" atl=\"Luxury\">";
            $("#car_image").html(default_photo);
        }
        else if (this.id == 'radio_mid'){
            default_photo = "<img src=\"mid.jpg\" atl=\"Mid-Size\">";
            $("#car_image").html(default_photo);
        }
        else if (this.id == 'radio_van'){
            default_photo = "<img src=\"van.jpg\" atl=\"Van\">";
            $("#car_image").html(default_photo);
        }
        else if (this.id == 'radio_truck'){
            default_photo = "<img src=\"truck.jpg\" atl=\"Truck\">";
            $("#car_image").html(default_photo);
        }
    });

    $("#label_compact").on('mouseenter',function(){
        $("#car_image").html("<img src=\"compact.jpg\" atl=\"Compact\">");
    });

    $("#label_mid").on('mouseenter',function(){
        $("#car_image").html("<img src=\"mid.jpg\" atl=\"Mid-Size\">");
    });

    $("#label_luxury").on('mouseenter',function(){
        $("#car_image").html("<img src=\"luxury.jpg\" atl=\"Luxury\">");
    });

    $("#label_van").on('mouseenter',function(){
        $("#car_image").html("<img src=\"van.jpg\" atl=\"Van\">");
    });

    $("#label_truck").on('mouseenter',function(){
        $("#car_image").html("<img src=\"truck.jpg\" atl=\"Truck\">");
    });


    $("#label_compact").on('mouseleave',function(){

        if(default_photo != undefined){
            $("#car_image").html(default_photo);
        }else{
            $("#car_image").html("");
        }
    });
    $("#label_mid").on('mouseleave',function(){
        if(default_photo != undefined){
            $("#car_image").html(default_photo);
        }else{
            $("#car_image").html("");
        }
    });
    $("#label_luxury").on('mouseleave',function(){
        if(default_photo != undefined){
            $("#car_image").html(default_photo);
        }else{
            $("#car_image").html("");
        }
    });
    $("#label_van").on('mouseleave',function(){
        if(default_photo != undefined){
            $("#car_image").html(default_photo);
        }else{
            $("#car_image").html("");
        }
    });
    $("#label_truck").on('mouseleave',function(){
        if(default_photo != undefined){
            $("#car_image").html(default_photo);
        }else{
            $("#car_image").html("");
        }
    });


    $("#slide_period").on("change", function(){
        $("#day_period").text($("#slide_period").val());
    });

});