DAY 3

"Stack Overflow" is a great resource
Code Academy is a good place for Git tutorials

COMMANDS:
* control K --> control S = shows all short cuts (this is in VSC --> search bar)

alt/option "arrow key" = allows you to grab a line of code and move it up/down

* control + shift A = deletes a whole line of code
* control + / = comment out a whole line/section of code

* git reset HEAD = when you added but change mind and don't want to commit


                                                                            -

DAY 4

functions:  takes input, does something with it, then gives an output
parameters of a function act like variables


function anatomy (name, parameters, statements, & returnValue)

when you call a function, you are assigning an action
to get a function to print the data value (string), you have to store it
        EX:  return name + ' is a great function name!';

//no name function
var annonymousFun = function()

//no parameters
function empty() {  console.log( 'I'll take nothing' )   }

//no statement
function lazy() {}

//no return
function returnNothing (todo1 , todo2) {  console.log ( ' I get nothing back ' )}

        prompt( 'string' );  // prompt takes a string value

EX:
function shout( useExclamations) {
    var yell = prompt( ' I\m going to yell back at you!' ).toUpperCase();
    if ( useExclamations) {
        yell += '!!!!!!!!';
    }
    return yell; //SOMETHING
     }

                //explanation:
                shout();  // USER INPUT
                shout( TRUE )  //USER INPUT!!!!!!!

var sentence = prompt( ' I\m going to yell back at you!' )
    function shout( param )  {
        return param.toUpperCse();

    }

EX:

fucntion getVerb ()  {
    var verb;
    verb = prompt( 'Give me a verb!' );
    console.log( 'Verb: ' + verb )
}

fucntion getNoun ()  {
    var noun;
    noun = prompt( 'Give me a verb!' );
    console.log( 'Noun: ' + verb )
}

function total ()  {

}

function totalTally ()  {
    var total = 0;

    total += getVerb();
    total += getNoun();

    return total;
    
}
alert( 'you got ' + totalTally() + ' questions right' );

I was Driver on: https://github.com/sevfitz/about-me/pull/2

                                                                                            |

DAY 5

How to look at defaults for CSS code in an actual document: dev tools (inspect) --> elements --> style

When creating a CSS page, remember to give the html and body a height to give everything else a relative

Noting children (in this example, just first level only):  #container > * {  min-height:  500px; }

box-sizing: border-box;  will affect the total width (margin+border+padding+content), taking them all into account and this width would be the final width designation

width: calc(50% - 4px);

_________

README.md files should include:  copyright info, 

                                                                                            |

DAY 6

/*
models:  menu, customer

customer
    (properties) -  name 
                    order
                    pay
    (methods) -     assignTable() 
                    placeOrder()

    )

    An object allows u to store our data in an understandable way

    Objects and Arrays (are same in that they) can hold any kind of data
    Objects and Arrays (are diff in that) Objects can be in any order

    var customerName = 'francis';
    var table = 1;

    var customerOne = {
        table: 0,
        order: []
        name: 'Francis'
        pay: function() {   ...annonymous function

        } 
    }
Object {table:0, order: Array(0), name: 'Francis', pay: function, assignTable:
function...}
    */

Access an array:  array[0];  /*  will give you Francis

var n = "name"
Access an object: customerOne["name"]  or  customerOne.name  /*  will give you Francis

"object literal" - {}
"string literal" - ""
"array literal" - []

Let's create another customer

var customerTwo = {
    table: 0,
    order: [],
    name: 'Pikachu',
    pay: function() {


    }
assignTable: function() {
    var randonTable = Math.floor(Math.random() * 5 + 1);

    this.table = randomTable;

customerTwo.name

Object {table:0, order: Array(0), name: 'Pikachu', pay: function, assignTable:
function...}

}

}

                                                                                        

DAY 9

3 Rules to priority in HTML:

1.  specificity: tag, .class, #id
2.  cascading: bottom rule rules!
3.  !important


Browser has EVENTS that we can attach to, ways user can interact with the browser
    EX:   on-click or submit button gets clicked, key strokes, scrolling

Preferred way of passing on an event to our html element
    takes 2 parameters (1. name) and (2. event listener)

Event bubbling:  it's when you click on elements and effectively clicking on everything inside it. Goes from the youngest (most-inner) child outward.  If you set it to a Boolean (true), then it changes the order from oldest (outer most) child inward.
       -  useful when you have several event listeners that you need to add
       - when you want to stop bubbling:  write event.stopPropagation();









