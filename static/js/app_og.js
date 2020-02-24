// import the data from data.js
const tableData = data;

// Reference the html table using d3
var tbody = d3.select("tbody");

// Create a function to build a table (11.5.1)
function buildTable(data){
  // First clear out any data
  tbody.html("")
  // Next, loop through each object in the data
  // And append a row and cells for each value in the data
  data.forEach((datarow) => {
      // append a row to the table
      let row = tbody.append("tr");
      // Loop through each value in the table and add
      // each value as a table cell (td)
      Object.values(datarow).forEach((val) =>{
        let cell = row.append("td");
        cell.text(val);
        }
    );
});
}

// Create a function to filter data
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date
    if (date) {
        // Apply 'filter' to the table data to only keep
        // the rows where 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData
    buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.select("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(filteredData);
