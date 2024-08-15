fetch("./data/rundata.json")
.then(response => response.json())
.then(data => displayRuns(data));

const displayRuns = (data) => {

    // let table = document.getElementById('run-table');
    // data.runs.forEach(function(object) {
    //     let tr = document.createElement('tr');
    //     tr.innerHTML = 
    //     '<td>' + object.id + '</td>' +
    //     '<td>' + object.day + '</td>' +
    //     '<td>' + object.month + '</td>' +
    //     '<td>' + object.dom + '</td>' +
    //     '<td>' + object.year + '</td>' +
    //     '<td>' + object.avg_pace + '</td>' +
    //     '<td>' + object.distance + '</td>' +
    //     '<td>' + object.duration + '</td>' +
    //     '<td>' + object.est_calories + '</td>';
    //     table.appendChild(tr);
    // });

    const rowsPerPage = 10; 
    let currentPage = 1; 

    function displayTable(page) { 
        const table = document.getElementById("runTable"); 
        const startIndex = (page - 1) * rowsPerPage; 
        const endIndex = startIndex + rowsPerPage; 
        const slicedData = data.runs.slice(startIndex, endIndex); 

        // Clear existing table rows 
        table.innerHTML = ` 
                <tr> 
                    <th>id</th> 
                    <th>day</th> 
                    <th>month</th> 
                    <th>dom</th> 
                    <th>year</th> 
                    <th>Average pace</th> 
                    <th>distance</th> 
                    <th>duation</th> 
                    <th>est calories</th>
                </tr> `; 
                
        // Add new rows to the table 
        slicedData.forEach(run => { 
            const row = table.insertRow(); 
            const idCell = row.insertCell(0); 
            const dayCell = row.insertCell(1); 
            const monthCell = row.insertCell(2); 
            const domCell = row.insertCell(3); 
            const yearCell = row.insertCell(4); 
            const avg_paceCell = row.insertCell(5); 
            const distanceCell = row.insertCell(6); 
            const durationCell = row.insertCell(7); 
            const est_caloriesCell = row.insertCell(8); 
            idCell.innerHTML = run.id; 
            dayCell.innerHTML = run.day; 
            monthCell.innerHTML = run.month;
            domCell.innerHTML = run.dom;
            yearCell.innerHTML = run.year;
            avg_paceCell.innerHTML = run.avg_pace;
            distanceCell.innerHTML = run.distance;
            durationCell.innerHTML = run.duration;
            est_caloriesCell.innerHTML = run.est_calories;
        }); 

        // Update pagination 
        updatePagination(page); 
    } 
    function updatePagination(currentPage) { 
        let pageCount = Math.ceil(data.runs.length / rowsPerPage); 
        const paginationContainer = document.getElementById("pagination"); 
        paginationContainer.innerHTML = ""; 

        for (let i = 1; i <= 10; i++) { 
            const pageLink = document.createElement("a"); 
            pageLink.href = "#"; 
            pageLink.innerText = i; 
            pageLink.onclick = function () { 
                displayTable(i); 
            }; 
            if (i === currentPage) { 
                pageLink.style.fontWeight = "bold"; 
                pageLink.style.color = "#c1121f"; 
            }
            paginationContainer.appendChild(pageLink); 
            paginationContainer.appendChild(document.createTextNode(""));

        }   
        console.log(`page count: ${pageCount}`);
    }

    // Initial display 
    displayTable(currentPage); 






}


