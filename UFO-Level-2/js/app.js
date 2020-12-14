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
