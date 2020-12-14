// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

// get a reference to the table body
var tbody = d3.select("tbody");

// sighting valeus for each of the columns
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // append table row
    var row = tbody.append("tr");


    // use object.entries to console.log each UFO value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // append cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
// Selecting the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    //select the input date
    var inputElement = d3.select("#dateteme");
    // get the valeu property of the inpit date, state and shape
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // create a filter for the date with datetime equal to the input value
    var filteredData = tableData.filter(sighting => sighting.datetime ===inputValue);
    console.log(filteredData);

    filteredData.forEach(function(selections) {

        console.log(selections);
        // append a table row for each sighting
        var row = tbody.append("tr");

    // use object.entries to console.log each UFO value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // append cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});
