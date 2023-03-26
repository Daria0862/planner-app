const hours = [
    {hour: "09", meridiem: "00"},
    {hour: "10", meridiem: "00"},
    {hour: "11", meridiem: "00"},
    {hour: "12", meridiem: "00"},
    {hour: "13", meridiem: "00"},
    {hour: "14", meridiem: "00"},
    {hour: "15", meridiem: "00"},
    {hour: "16", meridiem: "00"},
    {hour: "17", meridiem: "00"},
];

const currentDate = moment().format("dddd, MMMM Do");

$("currentDay").text(currentDate);

const container = $(".container");
hours.forEach(function(hour) {
    const row = $("<div>").addClass("row time-block");
const hourCol = $("<div>").addClass("col-md-1 hour");
const hourText = $("<p>").text(hour.hour + hour.meridiem);
hourCol.append(hourText);
})
