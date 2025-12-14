'use strict';
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function CookieStore(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalSales = 0;
  this.randomCustomers = function () {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }

  this.calcCustomersEachHour = function () {
    this.customersEachHour = [];
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(this.randomCustomers());
    }
  }
  this.calcCookiesEachHour = function () {
    this.cookiesEachHour = [];
    for (let i = 0; i < hours.length; i++) {
      // round to whole cookies sold per hour
      this.cookiesEachHour.push(Math.round(this.customersEachHour[i] * this.avgCookiesPerCustomer));
    }
  }
  this.calcTotalSales = function () {
    this.totalSales = this.cookiesEachHour.reduce((sum, cookies) => sum + cookies, 0);
  }
}
const seattle = new CookieStore('Seattle', 17, 65, 6.3);
const tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
const dubai = new CookieStore('Dubai', 11, 38, 3.7);
const paris = new CookieStore('Paris', 20, 38, 2.3);
const lima = new CookieStore('Lima', 2, 16, 4.6);
const stores = [seattle, tokyo, dubai, paris, lima];

stores.forEach(store => {
  store.calcCustomersEachHour();
  store.calcCookiesEachHour();
  store.calcTotalSales();
});
function renderTable(stores) {
  const table = document.createElement('table');
  table.id = 'salesTable';
  const headerrow = document.createElement('tr');

  const thead = document.createElement('thead');//table header
  const Fc = document.createElement('th');
  Fc.textContent = '';
  headerrow.appendChild(Fc);
  for (let i = 0; i < hours.length; i++) {
    const hourCell = document.createElement('th');
    hourCell.textContent = hours[i];
    headerrow.appendChild(hourCell);
  }
  const dailySales = document.createElement('th');
  dailySales.textContent = 'Daily Location Total';
  headerrow.appendChild(dailySales);
  thead.appendChild(headerrow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');//table body
  for (let i = 0; i < stores.length; i++) {
    const store = stores[i];
    const row = document.createElement('tr');
    const namecell = document.createElement('td');
    namecell.textContent = store.name;
    row.appendChild(namecell);
    for (let j = 0; j < hours.length; j++) {//table cookies data
      const hour = document.createElement('td');
      hour.textContent = store.cookiesEachHour[j];
      row.appendChild(hour);
    }
    const total = document.createElement('td');
    total.textContent = store.totalSales;
    row.appendChild(total)

    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  const tfoot = document.createElement('tfoot');//table footer for total sales per hour for all stores 
  const footer = document.createElement('tr');

  const cellname = document.createElement('td');
  cellname.textContent = 'totals';
  footer.appendChild(cellname);

  const hourlytotal = [];
  for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (let j = 0; j < stores.length; j++) {
      sum += stores[j].cookiesEachHour[i];
    }
    hourlytotal.push(sum);

    const totalcell = document.createElement('td');
    totalcell.textContent = sum;
    footer.appendChild(totalcell);
  }
  let grandtotal = 0;
  for (let i = 0; i < stores.length; i++) {
    grandtotal += stores[i].totalSales;
  }
  const grandtotalcell = document.createElement('td');
  grandtotalcell.textContent = (grandtotal);
  footer.appendChild(grandtotalcell);

  tfoot.appendChild(footer);
  table.appendChild(tfoot);

  const sales = document.getElementById('sales');//sales data section
  sales.appendChild(table);
}
renderTable(stores);

const form = document.getElementById('inputForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('Name').value;
  const min = document.getElementById('minCustomers').value;
  const max = document.getElementById('maxCustomers').value;
  const avg = document.getElementById('avgCookiesPerCustomer').value;
  console.log(name, min, max, avg);
  const newStore = new CookieStore(name, min, max, avg);
  newStore.calcCustomersEachHour();
  newStore.calcCookiesEachHour();
  newStore.calcTotalSales();
  stores.push(newStore);
  document.getElementById("salesTable").remove()
  renderTable(stores);
  form.reset();
});