$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd Do MMMM"));

    var savedEvents = JSON.parse(localStorage.getItem("events")) || [];


    $(".saveBtn").on("click", function () {
        var eventText = $(this).siblings(".description").val();
        var eventTime = $(this).parent().attr("id");
        savedEvents.push({ time: eventTime, text: eventText });
        localStorage.setItem("events", JSON.stringify(savedEvents));
    });

    for (var i = 0; i < savedEvents.length; i++) {
        $("#" + savedEvents[i].time).children(".description").val(savedEvents[i].text);
    }

});
