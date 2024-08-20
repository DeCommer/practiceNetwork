fetch("./data/rundata.json")
.then(response => response.json())
.then(data => displayRuns(data));

const displayRuns = (data) => {
    const runs = data.runs;
    const wrapper = document.getElementById('runTable');
    const rowsPerPage = 10;
    const initialPage = 1;

    displayList = (items, wrapper, rowsPerPage, page) => {
        wrapper.innerHTML = 
        `<tr> 
            <th>Weekday</th>
            <th>Month</th>
            <th>Day</th>
            <th>Year</th>
            <th>Avg Pace</th>
            <th>Distance</th>
            <th>Duration</th>
            <th>Calories</th>
        </tr>`;

        page--;

        const start = rowsPerPage * page;
        const end = start + rowsPerPage;
        const pageItems = items.slice(start, end);

        for (let i = 0; i < pageItems.length; i++) {
            const item = pageItems[i];
            const tr = document.createElement('tr');
            tr.innerHTML =
            `
            <td>${item.day}</td>
            <td>${item.month}</td>
            <td>${item.dom}</td>
            <td>${item.year}</td>
            <td>${item.avg_pace}</td>
            <td>${item.distance}</td>
            <td>${item.duration}</td>
            <td>${item.est_calories}</td>`;
            wrapper.appendChild(tr);
        }

        //Controls
        const pagination = document.getElementById('pagination');
        const totalPages = Math.ceil(items.length / rowsPerPage);

        pagination.innerHTML = '';

        const firstButton = document.createElement('button');
        firstButton.innerText = 'First';
        firstButton.className = 'first-button';
        firstButton.disabled = page === 0;
        firstButton.addEventListener('click', () => {
            displayList(items, wrapper, rowsPerPage, 1);
        });
        pagination.appendChild(firstButton);

        // const minusTenButton = document.createElement('button');
        // minusTenButton.innerText = '-10';
        // minusTenButton.className = 'minusTenButton';
        // minusTenButton.disabled = page === 0;
        // minusTenButton.addEventListener('click', () => {
        //     displayList(items, wrapper, rowsPerPage, page - 9);
        // });
        // pagination.appendChild(minusTenButton);

        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.className = 'prev-button';
        prevButton.disabled = page === 0;
        prevButton.addEventListener('click', () => {
            displayList(items, wrapper, rowsPerPage, page);
        });
        pagination.appendChild(prevButton);

        //Page Number Buttons
        const startPage = Math.max(1, page - 4); 
        const endPage = Math.min(totalPages, startPage + 9);

        for (let i = startPage; i <= endPage; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            button.className = 'pagination-button';
            button.disabled = i === page + 1;
            button.addEventListener('click', () => {
                displayList(items, wrapper, rowsPerPage, i);
            });
            pagination.appendChild(button);
        }

        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.className = 'next-button';
        nextButton.disabled = page === totalPages - 1;
        nextButton.addEventListener('click', () => {
            displayList(items, wrapper, rowsPerPage, page + 2);
        });
        pagination.appendChild(nextButton);

        const plusTenButton = document.createElement('button');
        plusTenButton.innerText = '+10';
        plusTenButton.className = 'plusTenButton';
        plusTenButton.disabled = page === totalPages - 1;
        plusTenButton.addEventListener('click', () => {
            displayList(items, wrapper, rowsPerPage, page + 10);
        });
        pagination.appendChild(plusTenButton);

        const lastButton = document.createElement('button');
        lastButton.innerText = 'Last';
        lastButton.className = 'last-button';
        lastButton.disabled = page === totalPages - 1;
        lastButton.addEventListener('click', () => {
            displayList(items, wrapper, rowsPerPage, totalPages);
        });
        pagination.appendChild(lastButton);
    }
    
    displayList(runs, wrapper, rowsPerPage, initialPage);
}
