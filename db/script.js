$(document).ready(function () {
    displayDate();

    function displayDate(){
        var toDay = new Date();
        var day = toDay.getDate();
        var month = toDay.getMonth();
        var year = toDay.getFullYear();
        var hour = toDay.getHours();
        var minute = toDay.getMinutes();

        $("#date").text(month + "/" + day + "/" + year );
        $("#time").text(hour + ":" + minute);
    }
});
