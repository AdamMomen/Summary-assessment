// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1            (DONE)                       */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
  // pseudo-code
//1 spliting the string into array 
//2 using map function for iteration and returning each element's length in array 

  function wordLengths(str) {
  var splited = str.split(' ');
    return map(splited, function (element, index) {
      return  element.length;
    },);
  }
  
  //=============================================================================
  /*                                  Q2       (NOT DONE)                             */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3
  
   // pseudo-code
//1 spliting the string into array
//2 using reduce function bc we need to return value of one variable
//3 iteration , checking each element if matchs the character
//4 if matched increase result by 1 
  function countOccurrences(string, character) {
    var splited = string.split('');
      return reduce(splited, function (result, element) {
        if( element === character ) {
         return   result + 1;
         console.log(result);
        }
    },0);
  }
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]
  
     // pseudo-code
//1 spliting the string into array
//2 using filter function for iterationm checking if element's string length is grater tham 3 --> returning the element in other array (acc)
//3 returning the result as o/p


  function wordsLongerThanThree(str) {
   var splited = str.split(' ');
    return filter(splited, function (element) {
     return element.length > 3;
   })
  }
  
  //=============================================================================
  /*                                  Q4         (DONE)                               */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
  
    // pseudo-code
//0 setting the resultStr in OR logic operator to previos value when we call it or take empty str;
//1 the stoping condition is when the counter = 0 // this will return the result in the last step
//2 each recursive run , decrease counter by 1;
//3 return result string if the counter reached 0

  function repeatString(str, count, resultStr) {
  var resultStr = resultStr || '';   
  if (count === 0) {
    return resultStr;
    }
    resultStr += str;
    return repeatString( str, count-1, resultStr )
  } 
   
  
  //=============================================================================
  /*                                  Q5          (DONE)                             */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
   var pizza = makePizza("thin", "M", 2);
   pizza.addIngredients("tomato");
   pizza.addIngredients("meshroom");
   pizza.addIngredients("meat");

   //modified the displayIngredaints call so it will return me the value without console.log
   pizza.displayIngredaints();
   pizza.bakePizza();
   pizza.eatSlice();
   pizza.eatSlice();
   pizza.eatSlice();
  
   // pseudo-code
//0 created array for ingredients that srores the ingresients inside
//1 object that store all the properties and function property
//2 each function should have certain task when it's called



  // Write your code here .....
 function makePizza(crust, size, numberOfSlice){
var  ingredientsArr = [];
return {
      crust: crust,
      size: size,
      numberOfSlice: numberOfSlice,
      ingredients: ingredientsArr,
        addIngredients: function(ingredients) {
          ingredientsArr.push(ingredients);
         },

        displayIngredaints: function() {
          return 'The ingredients are: ' + ingredientsArr.join(',');
         }, 
         // set delay of 2sec to before returning
        bakePizza: function() {
        setInterval( function () {
           console.log( 'Your thin' + size + ' '  + numberOfSlice + ' slice ' + 'pizza is done');
            }, 2000)
          },
          //eatSlice will decrease  numberOfSlice by 1 each call
        eatSlice: function () {
          if (numberOfSlice > 0) {
            return numberOfSlice -= 1;
          } else {
            return 'pizza is completed';  
        }   
     } 
  }
}
  //=============================================================================
  /*                                  Q6              (DONE)                        */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
  
  // Write your code here .....
  function ReadingList() {
    var list = {};
      list.Read = 0;
      list.unRead = 0;
      list.toRead = [];
      list.currentRead;
      list.readBooks = [];
      list.AddBook = AddBook;
      list.finishCurrentBook = finishCurrentBook;
    return list;
  }
  // add a bookname , push it to toRead array, increase unRead counter assign the first the value of toRead Array to currentRead
  var AddBook = function (bookName) {
    this.toRead.push(bookName);
    this.unRead += 1;
    this.currentRead = this.toRead[0]
  }
  //deletes the first element in the toRead array , push currnetlyread book to readBook, re - assign the first the value of toRead Array to currentRead
  // increase the Read books counter by 1, decrease the UNREAD books counter by 1
  var finishCurrentBook = function () {
    this.toRead = this.toRead.slice(1);
    this.readBooks.push(this.currentRead);
    this.currentRead = this.toRead[0]
    this.Read += 1;
    this.unRead -= 1;
  }
ReadingList1 = ReadingList();
  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
    var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"
  
  // Write your code here .....
//0 entering the intail size 
//1 

  function makeSafe(intialsize) {

  var itemStored = '';
  var  space = intialsize;
//showing the items stored when the the safe is full // showing the items inside and reseting the  stord items string.  
    return function (item, size) {
      if (space <= 0) {
        console.log (itemStored);
        return itemStored = '';
        }

      //checking  if the size small/med/big and check space before storing the item.
      if ( size ==='small' && space >= 1) {
        space -= 1; 
        itemStored += item;
      } else if ( size ==='medium' && space >= 2) {
        space -= 2;
        itemStored += item; 
      } else if (size ==='big' && space >= 3) {
        space -= 3; 
        itemStored += item;
    }
  }
}
  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
    to store values in  varaibe in functions and varible is not in  global scope and not to lose the values each time we call the function .
  // 2- In OOP, what does "this" refer to ?
  this refer to the object declared moreover it seaches for the key in the the in object in the vicinity.
  // 3- What is jQuery?
    a library that has js code storded in it that has commands translated and simplified to do the same as js
  // 4- what is the diffrence between Closure's methods and The OOP's methods?
    closurs are storing functions inside the object and object declaring a varble  for a function  and sroting a varibel as value of a key.