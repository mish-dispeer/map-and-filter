(function () {

   var hotels = [
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

   ];

   function ChangeHotelRating(hotel){
      
      var rating = hotel.rating;
      var newRating; 

      if(rating > 0 && rating < 21){
         newRating = "Low Quality";
      }else if(rating> 20 && rating < 36){
         newRating = "Mid Quality";
      }else if(rating > 35 && rating < 51){
         newRating = "High Quality";
      }else{
         newRating = "Unknown";
      }

      var newHotel = 
      {
         "name":hotel.name,
         "id":hotel.id,
         "city":hotel.city,
         "state":hotel.state,
         "rating":newRating 
      };

      return newHotel;
   }

   function IsBellevueOrSeattle(hotel){

      if(hotel.city == 'Seattle' || hotel.city == 'Bellevue'){
         return true;
      }

      return false;
   }

   var NewRatingHotels = hotels.map(ChangeHotelRating);
   var FilteredHotels =hotels.filter(IsBellevueOrSeattle);

   function RenderOriginal(hotels){

      jQuery.each(hotels, function(i, val) {
       $(".table tbody").append("<tr><td>" + val.id + "</td><td>" + val.name + "</td><td>" + val.city + "</td><td>" + val.state + "</td><td>" + val.rating + "</td></tr>");
      });
   }

   $(document).ready(function(){

      RenderOriginal(hotels);

      $(".btn-clear").click(function(){
         $(".to_be_cleared").empty();
      }) 

      $(".btn-original").click(function(){
         $(".to_be_cleared").empty();
         RenderOriginal(hotels);
      });

      $(".btn-map").click(function(){
         $(".to_be_cleared").empty();
         RenderOriginal(NewRatingHotels);
      });   

      $(".btn-filter").click(function(){
         $(".to_be_cleared").empty();
         RenderOriginal(FilteredHotels);
      });   
      
   });

})();