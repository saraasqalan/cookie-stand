'use strict';

let hours = [' 6am ', ' 7am ', ' 8am ', ' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm '];
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const container = document.getElementById('salmon-cookies');

const tableEl = document.createElement('table');
container.appendChild(tableEl);
const allStores = []; 
function CookieStore(location, minCustomers, maxCustomers, avgSale) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSale = avgSale;
    this.cookiesArray = [];
    this.totalCookies = 0;
    allStores.push(this);
   
    CookieStore.prototype.getAvgCookiesHour = function(){
      for (let i = 0; i < hours.length; i++){
        let avgCookiesHour = Math.ceil(getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgSale);
        this.cookiesArray.push(avgCookiesHour);
        this.totalCookies += avgCookiesHour;
        console.log(this.cookiesArray);
      }
    };  }

  
    
  function renderHeaders () {
        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = 'Location';
       
        for (let i = 0; i < hours.length; i++) {
          thEl = document.createElement('th');
          trEl.appendChild(thEl);
          thEl.textContent = hours[i];
        }
        thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = 'Total';
        }

  CookieStore.prototype.render = function () {


        let trEl = document.createElement('tr');
        tableEl.appendChild(trEl);

        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = this.location;
      
        for (let i = 0; i < hours.length; i++){
          tdEl = document.createElement('td');
          trEl.appendChild(tdEl);
          console.log(this.cookiesArray);
          tdEl.textContent = this.cookiesArray[i];
        }
        tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = this.totalCookies; 
      };
   
      function renderFootr() {
        let  trEl=document.createElement('tr');
      tableEl.appendChild(trEl);

      let thEl = document.createElement('th');
      trEl.appendChild(thEl);
      thEl.textContent = 'Total'
      let totalOfTotals=0;
      for (let i = 0; i < hours.length; i++) {
        let totalPerHour =0;
     for (let j = 0; j < allStores.length; j++) {
       totalPerHour+=allStores[j].cookiesArray[i];
       totalOfTotals+=allStores[j].cookiesArray[i];
     }
       let thEl = document.createElement('th');
       trEl.appendChild(thEl);
       thEl.textContent = totalPerHour;

       }
       let thE2 = document.createElement('th');
       trEl.appendChild(thE2);
       thE2.textContent = totalOfTotals; 
      }
    



       const seattle =new CookieStore( 'Seattle',  23,  65, 6.3);
       const tokyo =new CookieStore( 'Tokyo',  3,   24,   1.2);
       const dubai =new CookieStore( 'Dubai', 11,  38,  3.7);
       const paris = new CookieStore( 'Paris',  20,  38,  2.3);
       const lima =new CookieStore( 'Lima',  2,  16,  4.6);




          seattle.getAvgCookiesHour();
         tokyo.getAvgCookiesHour();
          dubai.getAvgCookiesHour();
         paris.getAvgCookiesHour();
          lima.getAvgCookiesHour();
         renderHeaders();
         seattle.render();
         tokyo.render();
         dubai.render();
         paris.render();
         lima.render();
        renderFootr();


        const form = document.getElementById("sales")  ;
        form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log(event.target);

       const location = event.target.location.value; 
       const minCustomers = event.target.minCustomers.value;
       const maxCustomers = event.target.maxCustomers.value;
       const avgSale = event.target.avgSale.value;
 

       const Loc = new CookieStore (location,minCustomers,maxCustomers,avgSale);
       Loc.getAvgCookiesHour();
       Loc.render();
       form.reset();      
}) 
 

          