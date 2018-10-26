/*
  Hey, welcome to the first question!

  Here's a breakdown of the question, and some pointers on how to get started!
    - A variable has been declared a few lines above (`numSales`).
    - Just below, the contents of the `numSales` variable are logged to the console.
    - Your job is to assign the variable to the correct value (in this case: the total number of sales) *BEFORE* it is logged out.
    - You can do this by:
      - Adding an `=` sign (we are *assigning* something after all)
      - Starting with the `transactions` variable (see the example question);
      - Adding one or more methods to transform/extract the value we're looking for.
      - If your solution is correct, `numSales` should be equal to 5.

  You can solve the remaining questions in the same way!

  P.S.
  The breakdown above takes up a lot of space, feel free to move it to the top or bottom of the file!
*/

var transactions = [
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'CJ Cherryh',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XS Doodad', price: -0.50 },
      { name: 'XS Doodad', price: -0.50 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Basic Gadget', price: -2.00 },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Frederik Pohl',
    items: [
      { name: 'Byte', price: 1.00 },
      { name: 'Byte', price: 1.00 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'cash',
    vendor: 'Clarke Computing',
    items: [
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 },
      { name: 'Floppy Disk', price: -0.10 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'credit',
    customer: 'Neal Stephenson',
    items: [
      { name: 'kilobyte', price: 1024.00 }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Gibson Gadgets',
    items: [
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  },
      { name: 'Advanced Gadget', price: -3.50  }
    ]
  },
  {
    type: 'purchase',
    paymentMethod: 'credit',
    vendor: 'Dick\'s Doodads',
    items: [
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 },
      { name: 'XL Doodad', price: -3.00 }
    ]
  },
  {
    type: 'sale',
    paymentMethod: 'cash',
    customer: 'Isaac Asimov',
    items: [
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
      { name: 'Bit', price: 0.125 },
    ]
  }
];


// --------------------------------------------------
// EXAMPLE QUESTION
// --------------------------------------------------
/*
  Calculate the total number of transactions.
*/
var totalTransactions = transactions.length;

console.log( 'The total number of transactions is:', totalTransactions );


// --------------------------------------------------
// QUESTION 01
// --------------------------------------------------
/*
  Calculate the total number of 'sales'.

  HINT(S):
  - Not all transactions are 'sales'.
*/
var numSales6 = transactions.filter(transaction => transaction.type === "sale").length;
var numSales5 = transactions.filter(function (transaction) {
    return transaction.type === "sale";
}).length;

console.log( 'ES5 The total number of sales is:', numSales5 );
console.log( 'ES6 The total number of sales is:', numSales6 );


// --------------------------------------------------
// QUESTION 02
// --------------------------------------------------
/*
  Calculate the total number of 'purchases'.
*/
var numPurchases5 = transactions.filter(function (transaction) {
    return transaction.type === "purchase";
}).length;
var numPurchases6 = transactions.filter(transaction => transaction.type === "purchase").length;
console.log( '-------ANSWER Q2---------');
console.log( 'ES5 The total number of purchases is:', numPurchases5 );
console.log( 'ES6 The total number of purchases is:', numPurchases6 );

// --------------------------------------------------
// QUESTION 03
// --------------------------------------------------
/*
  Calculate the total number of 'cash' 'sales'.

  HINT(S):
  - Don't forget that 'purchases' can also be made in 'cash'!
*/
var numCashSales5 = transactions.filter(function (transaction) {
     if (transaction.type === "sale" && transaction.paymentMethod === "cash"){
       return transaction;
     }
}).length;

// var numCashSales6 = transactions.filter(transaction => transaction.type === "sale" && transaction => transaction.paymentMethod === "cash");
console.log( '-------ANSWER Q3---------');
console.log( 'ES5 The total number of cash sales is:', numCashSales5 );
// console.log( 'The total number of cash sales is:', numCashSales6 );


// --------------------------------------------------
// QUESTION 04
// --------------------------------------------------
/*
  Calculate the total number of 'credit' 'purchases'.

  HINT(S):
  - Make sure to exclude any 'sales' made by 'credit'!
*/

var numCreditPurchases = transactions.filter(function (transaction, index, numSales5) {
     if (transaction.type === "purchase" && transaction.paymentMethod === "credit"){
       return transaction;
     }
}).length;

console.log( '-------ANSWER Q4---------');
console.log( 'The total number of credit purchases is:', numCreditPurchases );


// --------------------------------------------------
// QUESTION 05
// --------------------------------------------------
/*
  Create an array that includes all of vendors which appear in the transactions data set.
  eg. `[ 'vendor one', 'vendor two', ... ]

  HINT(S):
  - Not all transactions have a 'vendor'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - This array is allowed to contain duplicate values.
*/
// var allVendorX = transactions.map(function (transaction, index, array) {
//        return "Vendor " + index + ": " + transaction.vendor;
// }).filter(function (transaction, index, array) {
//         if (transaction != "Vendor " + index + ": " + transaction.vendor){
//           return transaction;
//         }
// });

var allVendors = [];
var onlyPurchases = transactions.filter(function (transaction, index, array) {
        if (transaction.vendor){
          return transaction;
        }
}).forEach(function(transaction, index) {
    allVendors.push("Vendor " + (index + 1) + ": " + transaction.vendor);
});



// onlyPurchases.forEach(function(transaction, index) {
//     allVendors.push("Vendor " + (index + 1) + ": " + transaction.vendor);
// });

console.log( '-------ANSWER Q5---------');
console.log( 'The vendors are:', allVendors );


// --------------------------------------------------
// QUESTION 06
// --------------------------------------------------
/*
  Create an array that includes all of the *unique* customers which appear in the transactions data set.
  eg. `[ 'customer one', 'customer two', ... ]

  HINT(S):
  - Not all transactions have a 'customer'!
  - The assembled array should be made up of strings, not full `transaction` objects.
  - Make sure that the resulting array *does not* include any duplicates.
*/

var onlyCustomers = transactions.filter(function (transaction) {
        if (transaction.customer){
          return transaction;
        }
}).map(function(transaction){
      return transaction.customer
});

var uniqueCustomers = onlyCustomers.filter(function(customer, index){
      return customer.indexOf(customer)!=index;
});

console.log( '-------ANSWER Q6---------');
console.log( 'The unique customers are:', uniqueCustomers );


// --------------------------------------------------
// QUESTION 07
// --------------------------------------------------
/*
  Create an array of information about the 'sale' transactions which include 5 or more items.

  The array should resemble the following:
  [ { name: 'Customer Name', numItems: 5 }, ... ]

  HINT(S):
  - There may be more than 1 'sale' that includes 5 or more items.
  - Individual transactions do not have either `name` or `numItems` properties, we'll have to add them to the output.
*/

var onlyBigSpenders = transactions.filter(function (transaction) {
        if (transaction.type === "sale" && transaction.items.length >= 5){
          return transaction;
        }
});

var bigSpenders = [];
onlyBigSpenders.forEach(function(transaction, index, array) {
    return bigSpenders[index] = {
                name: transaction.customer,
                numItems: transaction.items.length
    }
});

console.log( '-------ANSWER Q7---------');
console.log( 'The "big spenders" are:', bigSpenders );


// --------------------------------------------------
// QUESTION 08
// --------------------------------------------------
/*
  Calculate the sum of the *first* 'sale' transaction.

  HINT(S):
  - Transactions don't have 'prices', but their 'items' do!
*/

// console.log( transactions[0].items[0].price);

var findFirstSales = transactions.find(function(sale){
    return sale.type === "sale"
});

var sumSales = findFirstSales.items.reduce(function(accumulator, currValue, currentIndex, array){
          return accumulator + currValue.price;
}, 0);

console.log( '-------ANSWER Q8---------');
console.log( 'The sum of all sales is:', sumSales );


// --------------------------------------------------
// QUESTION 09
// --------------------------------------------------
/*
  Calculate the sum of *all* 'purchase' transactions.

  HINT(S):
  - Your solution to 'QUESTION 08' is a good starting point!
  - Make sure to include 'price' information from *all* purchases.
*/

var onlyPurchases = transactions.filter(function (transaction) {
    return transaction.type === "purchase";
});

var sumPurchases = onlyPurchases.reduce(function(accumulator, currValue){
    var totalOnePurchase = currValue.items.reduce(function(accum, cuVal){
              return accum + cuVal.price;
    }, 0);
          return accumulator + totalOnePurchase;
}, 0);

console.log( '-------ANSWER Q9---------');
console.log( 'The sum of all purchases is:', sumPurchases );


// --------------------------------------------------
// QUESTION 10
// --------------------------------------------------
/*
  Calculate the company's net profit.

  This number will be positive if the sum of the sales is greater than the amount spent on purchases.

  Otherwise, this number will be negative.

  HINT(S):
  - Unlike 'QUESTION 08' and 'QUESTION 09', here we're interested in both 'sale' and 'purchase' transactions.
*/
var onlyPurchases = transactions.filter(function (transaction) {
    return transaction.type === "purchase";
});

var sumPurchases = onlyPurchases.reduce(function(accumulator, currValue){
    var totalOnePurchase = currValue.items.reduce(function(accum, cuVal){
              return accum + cuVal.price;
    }, 0);
          return accumulator + totalOnePurchase;
}, 0);

var onlySales = transactions.filter(function (transaction) {
    return transaction.type === "sale";
});

var sumSales = onlySales.reduce(function(accumulator, currValue){
    var totalOneSale = currValue.items.reduce(function(accum, cuVal){
              return accum + cuVal.price;
    }, 0);
          return accumulator + totalOneSale;
}, 0);

var netProfit = sumSales + sumPurchases;


console.log( '-------ANSWER Q10---------');
console.log( 'The net profit is:', netProfit );


// --------------------------------------------------
// QUESTION 11
// --------------------------------------------------
/*
  Calculate the most items sold as part of single transaction.

  HINTS:
  - The result of this calculation should be a number (not an array, object, or other data type).
*/

console.log( '-------ANSWER Q11---------');

var mostItemsHelper = transactions.map(function(trans, index, array){
           return trans.items.length;
});

maxItem = mostItemsHelper[0];
var mostItems = mostItemsHelper.reduce(function(accum, currVal){
                if(currVal > accum){
                  accum = currVal;
                  console.log (accum);
                }
                return accum;
}, maxItem);

console.log( 'The most items sold in a single transaction is:', mostItems );


// --------------------------------------------------
// QUESTION 12
// --------------------------------------------------
/*
  Calculate the sum of the 'purchase' with the fewest items.
*/

// 1. filter for purchase array
// 2. find the fewest items
// 3. sum

console.log( '-------ANSWER Q12---------');

var onlyPurchases = transactions.filter(function (transaction) {
    return transaction.type === "purchase";
});
var itemsArray = onlyPurchases.map(function(trans, index, array){
           return trans.items.length;
});
// console.log (itemsArray);

leastItems = itemsArray[0];
index = 0
var leastItemsTransaction = itemsArray.reduce(function(accum, currVal, currIndex){
                if(currVal < accum){
                  accum = currVal;
                  index = currIndex;
                }
                return accum;
}, leastItems);

var sumOfSmallestPurchase = onlyPurchases[index].items.reduce(function(accumulator, currValue){
          return accumulator + currValue.price;
}, 0);


console.log( 'The sum of the smallest purchase is:', sumOfSmallestPurchase );
