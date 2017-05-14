'use strict';

//  List of common properties for all Stores

function StoreFront(customersMin, customersMax, cookieSales,storeName) {
    // this.hourlyCookiesSold = cookieNum;
    this.customersHourlyMin = customersMin;
    this.customersHourlyMax = customersMax;
    this.avgCookiesPerSale = cookieSales;
    this.name = storeName;

    this.calcCustomersPerHour = function () {
        return Math.floor(Math.random() * (this.customersHourlyMax - this.customersHourlyMin) + this.customersHourlyMin);
    };

    this.calcCookiesPerHour = function () {
        // this.calcCustomersPerHour();
        this.cookiesPerHour = [];

        for (var i = 0; i < 15; i++) {
            var cookies = Math.round(this.calcCustomersPerHour() * this.avgCookiesPerSale);
            this.cookiesPerHour.push(cookies);

            // console.log(cookies);
        }
    };

    this.calcTotalCookiesSold = function () {
        var totalCookies = 0;
        for (var i = 0; i < this.cookiesPerHour.length; i++){
            totalCookies += this.cookiesPerHour[i];
        }
        return totalCookies;
        // return Math.round(this.calcCustomersPerHour() * this.avgCookiesPerSale);
    }
}

//  Calling the function for each store and creates a new object with the following propeties

var store1 = new StoreFront(6.3, 23, 65, 'PDX Airport');
var store2 = new StoreFront(3, 24, 1.2, 'Pioneer Square');
var store3 = new StoreFront(11, 38, 3.7, 'Powell\'s');
var store4 = new StoreFront(20, 38, 2.3, 'St. John\s');
var store5 = new StoreFront(2, 16, 4.6, 'Waterfront');

//  Setting up an array of hours of operation

var hoursOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//  Calculate the number of average customers per hour

// StoreFront.prototype.calcCustomersPerHour = function () {
//     return Math.floor((Math.random() * (this.customersHourlyMax - this.customersHourlyMin)) + this.customersHourlyMin);
// }

//  Calculate the number of cookies purchased per hour

// StoreFront.prototype.calcCookiesPerHour = function () {
//     this.cookiesPerHour = [];
//     // this.calcCustomersPerHour();

//     for (var i = 0; i < 15; i++) {
//         var cookies = Math.round(this.calcCustomersPerHour() * this.hourlyCookiesSold);
//         this.cookiesPerHour.push(cookies);

//         console.log(cookies);
//     }
// }

//  Calculate total number of cookies sold/location: (#customers/hr)*(avg. cookies/sale)

// StoreFront.prototype.calcTotalCookiesSold = function () {
//     return Math.round(this.calcCustomersPerHour() * this.avgCookiesPerSale);
// }
// console.log('total cookies sold per store');

//  create a table
var table = document.getElementById('datatable');

// create the cells inside which the content will be placed, by creating the rows that the cells go into
function render(cellType, content, row) {
    var cell = document.createElement(cellType);
    cellType.innerText = content;
    row.appendChild(cell);
}

//  utilizing the store info by putting it into the table

StoreFront.prototype.render = function () {
    this.calcCookiesPerHour();
    var row = document.createElement('tr');
    var data = document.createElement('td');
    data.innerText = this.storeName;
    row.appendChild(data);

    for(var i = 0; i < this.cookiesPerHour.length; i++) {
        var cell = document.createElement('td');
        cell.innerText = this.cookiesPerHour[i];
        row.appendChild(cell); 
    }

    table.appendChild(row);
};

store1.render();
store2.render();
store3.render();
store4.render();
store5.render();
