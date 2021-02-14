'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgSale: 6.3,
    totalCookies: 0,
    getSales: function (min, max) {
        return getRandomNumber(min, max);
    },
    render: function () {
        const container = document.getElementById('salmon-cookies');
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);

        const h2El = document.createElement('h2');
        h2El.textContent = this.name;
        articleEl.appendChild(h2El);

        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let avgCookiesHour = Math.ceil(this.getSales(this.minCustomers , this.maxCustomers) * this.avgSale);
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ':' + avgCookiesHour + ' cookies';
            this.totalCookies += avgCookiesHour
        }
        const total = document.createElement('li');
        total.textContent = 'Total : ' + this.totalCookies +'  cookies';
        ulEl.appendChild(total);
    }
}

seattle.render();

const tokyo = {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgSale: 1.2,
    totalCookies: 0,
    getSales: function (min, max) {
        return getRandomNumber(min, max);
    },
    render: function () {
        const container = document.getElementById('salmon-cookies');
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);

        const h2El = document.createElement('h2');
        h2El.textContent = this.name;
        articleEl.appendChild(h2El);

        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let avgCookiesHour = Math.ceil(this.getSales(this.minCustomers , this.maxCustomers) * this.avgSale);
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ':' + avgCookiesHour + ' cookies';
            this.totalCookies += avgCookiesHour
        }
        const total = document.createElement('li');
        total.textContent = 'Total : ' + this.totalCookies +'  cookies';
        ulEl.appendChild(total);
    }
}

tokyo.render();


const dubai = {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgSale: 3.7,
    totalCookies: 0,
    getSales: function (min, max) {
        return getRandomNumber(min, max);
    },
    render: function () {
        const container = document.getElementById('salmon-cookies');
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);

        const h2El = document.createElement('h2');
        h2El.textContent = this.name;
        articleEl.appendChild(h2El);

        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let avgCookiesHour = Math.ceil(this.getSales(this.minCustomers , this.maxCustomers) * this.avgSale);
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ':' + avgCookiesHour + ' cookies';
            this.totalCookies += avgCookiesHour
        }
        const total = document.createElement('li');
        total.textContent = 'Total : ' + this.totalCookies +'  cookies';
        ulEl.appendChild(total);
    }
}

dubai.render();



const paris = {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgSale: 2.3,
    totalCookies: 0,
    getSales: function (min, max) {
        return getRandomNumber(min, max);
    },
    render: function () {
        const container = document.getElementById('salmon-cookies');
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);

        const h2El = document.createElement('h2');
        h2El.textContent = this.name;
        articleEl.appendChild(h2El);

        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let avgCookiesHour = Math.ceil(this.getSales(this.minCustomers , this.maxCustomers) * this.avgSale);
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ':' + avgCookiesHour + ' cookies';
            this.totalCookies += avgCookiesHour
        }
        const total = document.createElement('li');
        total.textContent = 'Total : ' + this.totalCookies +'  cookies';
        ulEl.appendChild(total);
    }
}

paris.render();


const lima = {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgSale: 4.6,
    totalCookies: 0,
    getSales: function (min, max) {
        return getRandomNumber(min, max);
    },
    render: function () {
        const container = document.getElementById('salmon-cookies');
        const articleEl = document.createElement('article');
        container.appendChild(articleEl);

        const h2El = document.createElement('h2');
        h2El.textContent = this.name;
        articleEl.appendChild(h2El);

        const ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let avgCookiesHour = Math.ceil(this.getSales(this.minCustomers , this.maxCustomers) * this.avgSale);
            const liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = hours[i] + ':' + avgCookiesHour + ' cookies';
            this.totalCookies += avgCookiesHour
        }
        const total = document.createElement('li');
        total.textContent = 'Total : ' + this.totalCookies +'  cookies';
        ulEl.appendChild(total);
    }
}

lima.render();