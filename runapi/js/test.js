  let listElement = document.getElementById('runTable'); 
    const paginationElement = document.getElementById("pagination"); 
    let currPage = 1;
    let rows = 10;
    
    function displayList(items, wrapper, rowsPerPage, page) {
        wrapper.innerHTML = 
        `<tr>
        <th>id</th>
        <th>Day</th>
        <th>Month</th>
        <th>Day of Month</th>
        <th>Year</th>
        <th>Avg Pace</th>
        <th>Distance</th>
        <th>Duration</th>
        <th>Estimated Calories</th>
        </tr>`;

        page--;

        let start = rowsPerPage * page;
        let end = start + rowsPerPage;
        let pageItems = items.slice(start, end);

        for (let i = 0; i < pageItems.length; i++) {
            let items = pageItems[i];
            // let table = document.getElementById('runTable');
            let tr = document.createElement('tr');
            tr.innerHTML =
            '<td>' + items.id + '</td>' +
            '<td>' + items.day + '</td>' +
            '<td>' + items.month + '</td>' +
            '<td>' + items.dom + '</td>' +
            '<td>' + items.year + '</td>' +
            '<td>' + items.avg_pace + '</td>' +
            '<td>' + items.distance + '</td>' +
            '<td>' + items.duration + '</td>' +
            '<td>' + items.est_calories + '</td>';
            wrapper.appendChild(tr);
            console.log(items);
        }

        console.log(`Start: ${start}, end: ${end}, page: ${page}`);
    }

    setPagination =  (items, wrapper, rowsPerPage) => {
        wrapper.innerHTML = ``;

        // let pageCount = Math.ceil(items.length / rowsPerPage);
        for(let i = 1; i < 5 + 1; i++) {
            let btn = pageBtn(i, items);
            wrapper.appendChild(btn);
        }

        //add new for loop for pev and next btns
    }
    
    pageBtn = (page, items) => {
        console.log(`page: ${page}`);
        let button = document.createElement('button');
        button.innerText = page;
        
        if(currPage == page) {button.classList.add('active');}

        button.addEventListener('click', () => {
            currPage = page;
            displayList(items, listElement, rows, currPage);
            let currentBtn = document.querySelector('.pageNumbers button.active');
            currentBtn.classList.remove('active');
            button.classList.add('active');
        });


        
        return button;
    }

    displayList(data.runs, listElement, rows, currPage);
    setPagination(data.runs, paginationElement, rows);
