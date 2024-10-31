fetch("./data/rundata-exp.json")
.then(response => response.json())
.then(data => displayRuns(data));

// Data Handler
const displayRuns = (data) => {
    const runs = data.runs;
    const wrapper = document.getElementById('run-data-container');
    const yearSelect = document.getElementById("year-selector");
    const rowsPerPage = 10;
    const initialPage = 1;

    // Populate year selector
    const years = [...new Set(runs.map(run => run.year))];
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });

    displayList = (items, wrapper, rowsPerPage, page) => {
        page--;

        const start = rowsPerPage * page;
        const end = start + rowsPerPage;
        const pageItems = items.slice(start, end);

        wrapper.innerHTML = `
        <div class="data-title-container">
            <div class="data-title">#       </div>
            <div class="data-title">Weekday </div>
            <div class="data-title">Month   </div>
            <div class="data-title">Day     </div>
            <div class="data-title">Year    </div>
            <div class="data-title">Avg Pace</div>
            <div class="data-title">Distance</div>
            <div class="data-title">Duration</div>
            <div class="data-title">Calories</div>
        </div>
        `
        for (let i = 0; i < pageItems.length; i++) {
            const item = pageItems[i];
            const div = document.createElement('div');
            
            div.innerHTML =
                `<div class="data-container">
                     <div class="data-item" data-label="#">       ${formatNumber(item.id)}      </div>
                     <div class="data-item" data-label="Weekday"> ${item.weekday}               </div>
                     <div class="data-item" data-label="Month">   ${item.month}                 </div>
                     <div class="data-item" data-label="Day">     ${item.dom}                   </div>
                     <div class="data-item" data-label="Year">    ${item.year}                  </div>
                     <div class="data-item" data-label="Avg Pace">${item.avgPace}               </div>
                     <div class="data-item" data-label="Distance">${item.distance}              </div>
                     <div class="data-item" data-label="Duration">${item.duration}              </div>
                     <div class="data-item" data-label="Calories">${formatNumber(item.calories)}</div>
                </div>`;
            wrapper.appendChild(div);
        }

//Controls
        const pagination = document.getElementById('pagination');
        const totalPages = Math.ceil(items.length / rowsPerPage);

        pagination.innerHTML = ``;

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
        const startPage = Math.max(1, page - 1); 
        const endPage = Math.min(totalPages, startPage + 4);

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

        const lastButton = document.createElement('button');
        lastButton.innerText = 'Last';
        lastButton.className = 'last-button';
        lastButton.disabled = page === totalPages - 1;
        lastButton.addEventListener('click', () => {
            displayList(items, wrapper, rowsPerPage, totalPages);
        });
        pagination.appendChild(lastButton);
    }

    yearSelect.addEventListener('change', () => {
        const selectedYear = yearSelect.value;
        const filteredRuns = selectedYear ? runs.filter(run => run.year == selectedYear) : runs;
        displayList(filteredRuns, wrapper, rowsPerPage, initialPage);
    });
    
    displayList(runs, wrapper, rowsPerPage, initialPage);

    //Metrics
    const VOLT = 9320;
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const totalRuns = document.querySelector('.total-runs');
    const totalDist = document.querySelector('.total-distance');
    const totalCal = document.querySelector('.total-cal');

    let runSum = 0;
    let distSum = 0;
    let calSum = 0;
    runs.forEach(run => {
            runSum = run.id;
            calSum += run.calories;
            distSum += (run.distance);
    }); 
    totalRuns.innerHTML = `<p>Total Runs: <span>${formatNumber(Math.round(runSum))}</span>`;
    totalDist.innerHTML = `<p>Distance: <span>${formatNumber(Math.round(distSum) - 35)}</span> mi`;
    totalCal.innerHTML = `<p>Calories: <span>${formatNumber(Math.round(calSum))}</span>`;

    const milesToVolt = VOLT - (distSum - 35);
    // document.getElementById('countdown').innerHTML = `<p><span style="color: var(--orange);">${Math.round(milesToVolt)}</span> miles until Nike+ Volt Level</p>`
    console.log(`${Math.round(milesToVolt)} miles until Nike+ Volt Level`);
}
