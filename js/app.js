'use strict';

// 1.  create where (id) the info is going.
// 2.  create the element that the info goes into.
// 3.  assign the info to that element.
// 4.  append the created element to the id that we found.
//  Always go smallest to biggest


var getEl = document.getElementById('here')
var unordList = document.createElement('ul')
var list = document.createElement('li')
list.innerText = 'hello, i\'m here';
getEl.appendChild(unordList);
unordList.appendChild(list); 
// appending list to parent which is unordList

// object literal
var obj = {
    first: '1st prop',
    second: '2nd prop',
    third: '3rd prop',
    fourth: '4th prop'
}

// function/object constructor to simplify repetitive functions/objects

var ObjConstructor = function (fir, sec, thi, fou){
    this.table = fir;
    this.second = sec;
    this.third = thi;
    this.fourth = fou;
}
//  above is a list of common properties for all ObjConstructor

var firstObj = new ObjConstructor('mine', 'yours', 'ours', 'theirs');
var livingRoom = new ObjConstructor('ikea', 'target', 'rug', 'sink');

//  above is calling/placing parameters for each ObjConstructor (ie: store)

console.log(firstObj)

//  Object Prototype...
// reference the object created previously (constructor) with a name for whatever it is I want to do (pluralization)
// now inside the object, so use "this" again

ObjConstructor.prototype.pluralization = function (x) {
    this.fourth = this.fourth + 's';
    // or for assignment...
    this.table = Math.floor(Math.random() * 10) + x);

};

livingRoom.pluralize(23);




//  Start of Monday assigment


var storeOne = {

    cookiesPerHour: 6.3,
    customersHourlyMin: 23,
    customersHourlyMax: 65,
    name: 'PDX Airport',
    calcCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.customersHourlyMax - this.customersHourlyMin)) + this.customersHourlyMin;
    },

    calcCookiesPerHour: function () {
        this.cookiesPerHour = [];
        for (var i = 0; i < 15; i++);
        var randomCookies = Math.round(this.calcCustomersPerHour * this.cookiesPerHour);
        this.randomCookies.push(this.cookiesPerHour);
    }

};

//  List of common properties for all Stores

var StoreFront = function (cookieNum, customersMin, customersMax, storeName) {
    this.cookiesPerHour = cookieNum;
    this.customersHourlyMin = customersMin;
    this.customersHourlyMax = customersMax;
    this.name = storeName;
}

//  Calling the function for each store

    var store1 = new StoreFront('6.3', '23', '65', 'PDX Airport');
    var store2 = new StoreFront('3', '24', '1.2', 'Pioneer Square');
    var store3 = new StoreFront('11', '38', '3.7', 'Powell\'s');
    var store4 = new StoreFront('20', '38', '2.3', 'St. John\s');
    var store5 = new StoreFront('2', '16', '4.6', 'Waterfront');

    //  Calculate the number of customers per hour and the number of cookies purchased per hour

    StoreFront.prototype.calcCustomersPerHour = function() {
        this.customersHourly = Math.floor(Math.random * (this.customersHourlyMax - this.customersHourlyMin) + this.customersHourlyMin);
        this.cookiesPerHour = Math.round(this.calcCustomersPerHour * this.cookiesPerHour);

    }