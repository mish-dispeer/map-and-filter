ASSIGNMENT:
===========

Due:  3/12/2015

optional-- Partner with one or two other people to reduce the time you need to spend on this
 
Get a GitHub free account if you don't already have one, and create a public repository to hold this code
 
 
1.	Using the json object of properties below, put the data into a (hard-coded) array, then use the array.map() function to change the ratings of the hotels into a different system.  If they are 0 - 20 (2-star) map to "low quality", 21 - 35 "medium quality" and 36 - 50 "high quality".
 
2.	Using the same (original) array of properties, use the array.filter() function to find all hotels not in Seattle or Bellevue
 
Enclose your code in an IIFE.
 
3.	Extra credit: add an html page (with optional css).
a.	add a link to execute the map function
b.	add a link to execute the filter function
c.	display the results for each of these functions somehow (your choice)
d.	include the ability to clear the results.


DATA:

{  
   "name":"Hotel Bellevue",
   "id":41884,
   "city":"Bellevue",
   "state":"WA",
   "rating":45.0
},
{ 
   "name":"Fairmont Olympic Hotel",
   "id":20230,
   "city":"Seattle",
   "state":"WA",
   "rating":50.0
},
{  
   "name":"The Maxwell Hotel - Pineapple Hospitality",
   "id":3445681,
   "city":"Seattle",
   "state":"WA",
   "rating":30.0
},
{  
   "name":"Mediterranean Inn",
   "id":897598,
   "city":"Seattle",
   "state":"WA",
   "rating":25.0
},
{  
   "name":"The Westin Seattle",
   "id":16673,
   "city":"Seattle",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"Hotel FIVE - A Piece of Pineapple Hospitality",
   "id":11969,
   "city":"Seattle",
   "state":"WA",
   "rating":25.0
},
{  
   "name":"Pan Pacific Seattle",
   "id":1509734,
   "city":"Seattle",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"Warwick Seattle Hotel",
   "id":6839,
   "city":"Seattle",
   "state":"WA",
   "rating":35.0
},
{  
   "name":"Motif Seattle",
   "id":50947,
   "city":"Seattle",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"Grand Hyatt Seattle",
   "id":546475,
   "city":"Seattle",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"Executive Hotel Pacific",
   "id":23764,
   "city":"Seattle",
   "state":"WA",
   "rating":30.0
},
{  
   "name":"Four Seasons Hotel Seattle",
   "id":2163007,
   "city":"Seattle",
   "state":"WA",
   "rating":50.0
},
{  
   "name":"Hyatt At Olive 8",
   "id":2309333,
   "city":"Seattle",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"The Belltown Inn",
   "id":2330513,
   "city":"Seattle",
   "state":"WA",
   "rating":20.0
},
{  
   "name":"MarQueen Hotel",
   "id":201051,
   "city":"Seattle",
   "state":"WA",
   "rating":35.0
},
{  
   "name":"The Paramount Hotel",
   "id":58703,
   "city":"Seattle",
   "state":"WA",
   "rating":35.0
},
{  
   "name":"Inn at the Market",
   "id":36514,
   "city":"Seattle",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"Sheraton Seattle Hotel",
   "id":25290,
   "city":"Seattle",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"Salish Lodge & Spa",
   "id":4779,
   "city":"Snoqualmie",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"Best Western Loyal Inn",
   "id":16934,
   "city":"Seattle",
   "state":"WA",
   "rating":20.0
},
{  
   "name":"Willows Lodge",
   "id":536525,
   "city":"Woodinville",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"W Seattle",
   "id":284304,
   "city":"Seattle",
   "state":"WA",
   "rating":40.0
},
{  
   "name":"Inn At Queen Anne",
   "id":5483,
   "city":"Seattle",
   "state":"WA",
   "rating":20.0
},
{  
   "name":"Courtyard by Marriott Seattle Downtown Lake Union",
   "id":202730,
   "city":"Seattle",
   "state":"WA",
   "rating":30.0
},
{  
   "name":"Best Western Plus Executive Inn",
   "id":17066,
   "city":"Seattle",
   "state":"WA",
   "rating":30.0
},
{  
   "name":"Cedarbrook Lodge",
   "id":2299843,
   "city":"SeaTac",
   "state":"WA",
   "rating":35.0
},
{  
   "name":"DoubleTree by Hilton Seattle Airport",
   "id":1833,
   "city":"SeaTac",
   "state":"WA",
   "rating":35.0
},
{  
   "name":"La Quinta Inn and Suites Seattle Downtown",
   "id":16349,
   "city":"Seattle",
   "state":"WA",
   "rating":25.0
},
{  
   "name":"University Inn Seattle - Pineapple Hospitality",
   "id":27593,
   "city":"Seattle",
   "state":"WA",
   "rating":25.0
},
{  
   "name":"Best Western Airport Executel",
   "id":22893,
   "city":"SeaTac",
   "state":"WA",
   "rating":25.0
}
