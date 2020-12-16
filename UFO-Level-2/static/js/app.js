// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

var tbody = d3.select("tbody");

// sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // append one table row for each sighting
    var row = tbody.append("tr");

    // object.entries to console.log each sighting
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Selecting the button
var buttion = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // select input date, state and shape to the the HTML nodes 
    var inputElement = d3.select("#input");
    // get value property of the input date, state and shape
    var inputValue = inputElement.property("value")
    // filter data with datetime equal to iput value
    var filteredData = tableData.filter(sighting => 
        sighting.datetime === inputValue ||
        sighting.city === inputValue ||
        sighting.state === inputValue ||
        sighting.country === inputValue ||
        sighting.shape === inputValue);

    console.log(selections);
    // append one table row 'tr' for each ufo sighting 
    var row = tbody.append("tr");
    // use object.entries to console.log each ufo sighting
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // append cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});


