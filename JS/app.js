'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const container = document.getElementById('salmon-cookies');

const tableEl = document.createElement('table');
container.appendChild(tableEl);

function CookieStore(location, minCustomers, maxCustomers, avgSale) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSale = avgSale;
    //this.avgCookiesHour = avgSale;
    this.customersArray = [];
    this.cookiesArray = [];
    this.totalCookies = 0;
   
    CookieStore.prototype.getAvgCustomersHour = function (){
      for (let i = 0; i < hours.length; i++){
       let avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
        this.customersArray.push(avgCustomersHour);
    
      }
    };
    CookieStore.prototype.getAvgCookiesHour = function(){
      for (let i = 0; i < this.customersArray.length; i++){
        let avgCookiesHour = Math.ceil(this.customersArray[i] * this.avgSale);
        console.log(this.customersArray);
        this.cookiesArray.push(avgCookiesHour);
        this.totalCookies += avgCookiesHour;
      }
    };  }
  
    
  CookieStore.prototype.renderHeaders= function() {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let thEl = document.createElement('th');
        thEl.textContent = 'Location';
        trEl.appendChild(thEl);
        for (let i = 0; i < hours.length; i++) {
          thEl = document.createElement('th');
          thEl.textContent = hours[i];
          trEl.appendChild(thEl);
        };
        thEl = document.createElement('th');
        thEl.textContent = 'Total';
        trEl.appendChild(thEl);
     

    }
    



      CookieStore.prototype.render = function () {

        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let tdEl = document.createElement('td');
        tdEl.textContent = this.location;
        trEl.appendChild(tdEl);
      
        for (let i = 0; i < hours.length; i++){
          tdEl = document.createElement('td');
          tdEl.textContent = this.cookiesArray[i];
          trEl.appendChild(tdEl);
          console.log(this.cookiesArray[i]);
        }
        tdEl = document.createElement('td');
        tdEl.textContent = this.totalCookies;
        trEl.appendChild(tdEl);
        
       
      }
   
    



      CookieStore.prototype.renderAll = function() {
        location.innerHTML = ' ';
        renderHeaders();
        for (let i = 0; i < this.location.length; i++){
          location[i].render();
        }
      };

      const seattle =new CookieStore(
          'Seattle',
           23,
           65,
          6.3);
      const tokyo =new CookieStore(
          'Tokyo',
           3, 
           24, 
           1.2);
      const dubai =new CookieStore(
          'Dubai',
          11, 
          38, 
          3.7);
      const paris = new CookieStore(
          'Paris', 
          20, 
          38, 
          2.3);
      const lima =new CookieStore(
          'Lima', 
          2, 
          16, 
          4.6);
          
          
          seattle.renderHeaders();
          seattle.render();
          tokyo.render();
          dubai.render();
          paris.render();
          lima.render();
          