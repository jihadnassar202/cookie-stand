'use strict';
const hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
    const seattleSales=
    {
        name:'Seattle',
        minCustomers:23,
        maxCustomers:65,
        avgCookiesPerCustomer:6.3,
        customersPerHour:[],
        cookiesPerHour:[],
        totalSales:0,
        randomCustomers() {
            return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
          },
        
          calcCustomersPerHour() {
            this.customersPerHour = [];
            for (let i = 0; i < hours.length; i++) {
              this.customersPerHour.push(this.randomCustomers());
            }
          },
        
          calcCookiesPerHour() {
            this.cookiesPerHour = [];
            this.totalSales = 0;
        
            for (let i = 0; i < hours.length; i++) {
              const cookies = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
              this.cookiesPerHour.push(cookies);
              this.totalSales += cookies;
            }
          },
        
          showResults(parentElement) {
                const storeList = document.createElement('ul');
                {
                storeList.innerHTML = `
                <h2>${this.name}</h2>`
                for (let i = 0; i < hours.length; i++) {
                storeList.innerHTML += `
                <ul>
                <li>${hours[i]}: ${this.cookiesPerHour[i]} cookies</li>`
                }
                storeList.innerHTML += `
                <li>Total: ${this.totalSales} cookies</li>`;
                parentElement.appendChild(storeList);}}};
const tokyoSales={
    name:'Tokyo',
    minCustomers:3,
    maxCustomers:24,
    avgCookiesPerCustomer:1.2,
    customersPerHour:[],
    cookiesPerHour:[],
    totalSales:0,
    randomCustomers() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      },
    
      calcCustomersPerHour() {
        this.customersPerHour = [];
        for (let i = 0; i < hours.length; i++) {
          this.customersPerHour.push(this.randomCustomers());
        }
      },
    
      calcCookiesPerHour() {
        this.cookiesPerHour = [];
        this.totalSales = 0;
    
        for (let i = 0; i < hours.length; i++) {
          const cookies = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
          this.cookiesPerHour.push(cookies);
          this.totalSales += cookies;
        }
      },
    
      showResults(parentElement) {
            const storeList = document.createElement('ul');
            {
            storeList.innerHTML = `
            <h2>${this.name}</h2>`
            for (let i = 0; i < hours.length; i++) {
            storeList.innerHTML += `
            <ul>
            <li>${hours[i]}: ${this.cookiesPerHour[i]} cookies</li>`
            }
            storeList.innerHTML += `
            <li>Total: ${this.totalSales} cookies</li>`;
            parentElement.appendChild(storeList);}}};
const dubaiSales={
    name:'Dubai',
    minCustomers:11,
    maxCustomers:38,
    avgCookiesPerCustomer:3.7,
    customersPerHour:[],
    cookiesPerHour:[],
    totalSales:0,
    randomCustomers() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      },
    
      calcCustomersPerHour() {
        this.customersPerHour = [];
        for (let i = 0; i < hours.length; i++) {
          this.customersPerHour.push(this.randomCustomers());
        }
      },
    
      calcCookiesPerHour() {
        this.cookiesPerHour = [];
        this.totalSales = 0;
    
        for (let i = 0; i < hours.length; i++) {
          const cookies = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
          this.cookiesPerHour.push(cookies);
          this.totalSales += cookies;
        }
      },
    
      showResults(parentElement) {
            const storeList = document.createElement('ul');
            {
            storeList.innerHTML = `
            <h2>${this.name}</h2>`
            for (let i = 0; i < hours.length; i++) {
            storeList.innerHTML += `
            <ul>
            <li>${hours[i]}: ${this.cookiesPerHour[i]} cookies</li>`
            }
            storeList.innerHTML += `
            <li>Total: ${this.totalSales} cookies</li>`;
            parentElement.appendChild(storeList);}}};
const parisSales={
    name:'Paris',
    minCustomers:20,
    maxCustomers:38,
    avgCookiesPerCustomer:2.3,
    customersPerHour:[],
    cookiesPerHour:[],
    totalSales:0,
    randomCustomers() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      },
    
      calcCustomersPerHour() {
        this.customersPerHour = [];
        for (let i = 0; i < hours.length; i++) {
          this.customersPerHour.push(this.randomCustomers());
        }
      },
    
      calcCookiesPerHour() {
        this.cookiesPerHour = [];
        this.totalSales = 0;
    
        for (let i = 0; i < hours.length; i++) {
          const cookies = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
          this.cookiesPerHour.push(cookies);
          this.totalSales += cookies;
        }
      },
          showResults(parentElement) {
            const storeList = document.createElement('ul');
            {
            storeList.innerHTML = `
            <h2>${this.name}</h2>`
            for (let i = 0; i < hours.length; i++) {
            storeList.innerHTML += `
            <ul>
            <li>${hours[i]}: ${this.cookiesPerHour[i]} cookies</li>`
            }
            storeList.innerHTML += `
            <li>Total: ${this.totalSales} cookies</li>`;
            parentElement.appendChild(storeList);}}};
const limaSales={
    name:'Lima',
    minCustomers:2,
    maxCustomers:16,
    avgCookiesPerCustomer:4.6,
    customersPerHour:[],
    cookiesPerHour:[],
    totalSales:0,
    randomCustomers() {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      },
    
      calcCustomersPerHour() {
        this.customersPerHour = [];
        for (let i = 0; i < hours.length; i++) {
          this.customersPerHour.push(this.randomCustomers());
        }
      },
    
      calcCookiesPerHour() {
        this.cookiesPerHour = [];
        this.totalSales = 0;
    
        for (let i = 0; i < hours.length; i++) {
          const cookies = Math.round(this.customersPerHour[i] * this.avgCookiesPerCustomer);
          this.cookiesPerHour.push(cookies);
          this.totalSales += cookies;
        }
      },
    
      showResults(parentElement) {
            const storeList = document.createElement('ul');
      
            storeList.innerHTML = `
            <h2>${this.name}</h2>`
            for (let i = 0; i < hours.length; i++) {
            storeList.innerHTML += `
            <ul>
            <li>${hours[i]}: ${this.cookiesPerHour[i]} cookies</li>`
            }
            storeList.innerHTML += `
            <li>Total: ${this.totalSales} cookies</li>`;
            parentElement.appendChild(storeList);}}

       
    const sales = document.getElementById('sales');
    const stores = [seattleSales, tokyoSales, dubaiSales, parisSales, limaSales];
    stores.forEach(store => {
      store.calcCustomersPerHour();
      store.calcCookiesPerHour();
      store.showResults(sales);
    });
