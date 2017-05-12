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

// oblect literal
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




