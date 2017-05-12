'use strict';

//  List of common properties for all Stores

var StoreFront = function (cookieNum, customersMin, customersMax, storeName) {
    this.hourlyCookiesSold = cookieNum;
    this.customersHourlyMin = customersMin;
    this.customersHourlyMax = customersMax;
    this.name = storeName;
}

//  Calling the function for each store and creates a new object with the following propeties

    var store1 = new StoreFront(6.3, 23, 65, 'PDX Airport');
    var store2 = new StoreFront(3, 24, 1.2, 'Pioneer Square');
    var store3 = new StoreFront(11, 38, 3.7, 'Powell\'s');
    var store4 = new StoreFront(20, 38, 2.3, 'St. John\s');
    var store5 = new StoreFront(2, 16, 4.6, 'Waterfront');

//  Setting up an array of hours of operation

    StoreFront.prototype.hoursOp = ['6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//  Calculate the number of customers per hour and the number of cookies purchased per hour

    StoreFront.prototype.calcCustomersPerHour = function() {

        return Math.floor(Math.random() * (this.customersHourlyMax - this.customersHourlyMin) + this.customersHourlyMin);
    }

    StoreFront.prototype.calcCookiesPerHour = function() {
        this.cookiesPerHour = []; 
        this.calcCustomersPerHour();

        for (var i = 0; i < this.hoursOp.length; i++) {
        var cookies = Math.round(this.calcCustomersPerHour() * this.hourlyCookiesSold);
            this.cookiesPerHour.push(cookies); 

            console.log(cookies);
        }
    }


         
        console.log('this worked');
    

   