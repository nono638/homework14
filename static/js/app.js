// from data.js
var tableData = data;

var tbody = d3.select("tbody");  //line 64 of the HTML

function buildTable(data){
    tbody.html("");  //clears any exsisting HTML (that was put there by d3, does not remove it from the HTML file)

    data.forEach(dataRow => {
        var row = tbody.append('tr');
        
        Object.values(dataRow).forEach ((val)=>{
            var cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function ButtonClick() {


    var date = d3.select("#datetime").property("value");  //line 40 of the HTML
    let filteredData = tableData;
  
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    else{
        alert("Enter a date from early January 2010.")
    }
  
    buildTable(filteredData);  //see line 7
  }
  
  d3.selectAll("#filter-btn").on("click", ButtonClick);  //line 44 of the HTML
  
  // Build the table when the page loads
  buildTable(tableData);
  