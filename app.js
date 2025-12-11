'use strict';
const hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function CookieStand(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.totalSales = 0;
    
    this.randomCustomers = function() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    };
    
    this.calcCustomersPerHour = function() {
        this.customersPerHour = [];
        for (let i = 0; i < hours.length; i++) {
            this.customersPerHour.push(this.randomCustomers());
        }
    };
    this.calcCookiesPerHour = function() {
        this.cookiesPerHour = [];
        this.totalSales = 0;
        for (let i = 0; i < hours.length; i++) {
            const cookies = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
            this.cookiesPerHour.push(cookies);
            this.totalSales += cookies;
        }
    };
}

function renderThead(thead) {
    const tr = document.createElement('tr');
    
    const locationTh = document.createElement('th');
    locationTh.textContent = 'Location';
    tr.appendChild(locationTh);
    
    for (let i = 0; i < hours.length; i++) {
        const th = document.createElement('th');
        th.textContent = hours[i];
        tr.appendChild(th);
    }
    
    const dailyTotalTh = document.createElement('th');
    dailyTotalTh.textContent = 'Daily Total';
    tr.appendChild(dailyTotalTh);
    
    thead.appendChild(tr);
}

function renderStore(tbody, store) {
    const tr = document.createElement('tr');
    
    const nameTd = document.createElement('td');
    nameTd.textContent = store.name;
    tr.appendChild(nameTd);
    
    for (let i = 0; i < hours.length; i++) {
        const td = document.createElement('td');
        td.textContent = store.cookiesPerHour[i];
        tr.appendChild(td);
    }
    
    const totalTd = document.createElement('td');
    totalTd.textContent = store.totalSales;
    tr.appendChild(totalTd);
    
    tbody.appendChild(tr);
}

function renderTfoot(tfoot, stores) {
    const tr = document.createElement('tr');
    
    const labelTd = document.createElement('td');
    labelTd.textContent = 'Totals';
    tr.appendChild(labelTd);
    
    let grandTotal = 0;
    
    for (let i = 0; i < hours.length; i++) {
        let hourlyTotal = 0;
        for (let j = 0; j < stores.length; j++) {
            hourlyTotal += stores[j].cookiesPerHour[i];
        }
        grandTotal += hourlyTotal;
        
        const td = document.createElement('td');
        td.textContent = hourlyTotal;
        tr.appendChild(td);
    }
    
    const grandTd = document.createElement('td');
    grandTd.textContent = grandTotal;
    tr.appendChild(grandTd);
    
    tfoot.appendChild(tr);
}

const seattleSales = new CookieStand('Seattle', 23, 65, 6.3);
seattleSales.calcCustomersPerHour();
seattleSales.calcCookiesPerHour();

const tokyoSales = new CookieStand('Tokyo', 3, 24, 1.2);
tokyoSales.calcCustomersPerHour();
tokyoSales.calcCookiesPerHour();

const dubaiSales = new CookieStand('Dubai', 11, 38, 3.7);
dubaiSales.calcCustomersPerHour();
dubaiSales.calcCookiesPerHour();

const parisSales = new CookieStand('Paris', 20, 38, 2.3);
parisSales.calcCustomersPerHour();
parisSales.calcCookiesPerHour();

const limaSales = new CookieStand('Lima', 2, 16, 4.6);
limaSales.calcCustomersPerHour();
limaSales.calcCookiesPerHour();

const table = document.querySelector('#sales table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');

const stores = [seattleSales, tokyoSales, dubaiSales, parisSales, limaSales];

renderThead(thead);

stores.forEach(store => {
    renderStore(tbody, store);
});
renderTfoot(tfoot, stores);
