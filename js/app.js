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
