// from data.js
var tableData = data;


// // Select the button
var button = d3.select('#filter-btn')

// // Select the form
var form = d3.select('.form-control')

// // Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter(){
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
    var filteredData = tableData.filter(dataResult => dataResult.datetime === inputValue);
   
    //appends a table to the web page and then adds new rows of data for each UFO sighting.
    filteredData.forEach(data => {
    
        row = d3.select('tbody').append('tr');
        Object.entries(data).forEach(([key,value])=>{
            cell = row.append('td');
            cell.text(value)
        }
    
        )
    }
    )

    
}