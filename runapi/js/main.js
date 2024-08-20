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

        `<thead>
            <tr> 
                <th>Weekday</th>
                <th>Month</th>
                <th>Day</th>
                <th>Year</th>
                <th>Avg Pace</th>
                <th>Distance</th>
                <th>Duration</th>
                <th>Calories</th>
            </tr>
        </thead>`;

        page--;

        const start = rowsPerPage * page;
        const end = start + rowsPerPage;
        const pageItems = items.slice(start, end);

        for (let i = 0; i < pageItems.length; i++) {
            const item = pageItems[i];
            const tr = document.createElement('tr');
            tr.innerHTML =
            `<tbody>
                <td>${item.day}</td>
                <td>${item.month}</td>
                <td>${item.dom}</td>
                <td>${item.year}</td>
                <td>${item.avg_pace}</td>
                <td>${item.distance}</td>
                <td>${item.duration}</td>
                <td>${item.est_calories}</td>
            </tbody>`;
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

        const prev10Button = document.createElement('button');
        prev10Button.innerText = '<<';
        prev10Button.className = 'prev10-button';
        prev10Button.disabled = page <= 10;
        prev10Button.addEventListener('click', () => {
            displayList(items, wrapper, rowsPerPage, Math.max(1, page - 10));
        });
        pagination.appendChild(prev10Button);

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

        const next10Button = document.createElement('button');
        next10Button.innerText = '>>';
        next10Button.className = 'next10-button';
        next10Button.disabled = page >= totalPages - 9;
        next10Button.addEventListener('click', () => {
            displayList(items, wrapper, rowsPerPage, Math.min(totalPages, page + 10));
        });
        pagination.appendChild(next10Button);

        console.log(page)

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
