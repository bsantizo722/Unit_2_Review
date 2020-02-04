"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: brandon santizo
   Date:   2/3/20

	
*/
// step 4
var thisDay = new Date("August 30, 2018");
// step 5
var tableHTML = "<table id= 'eventTable'> <caption>Upcoming Events</caption> <tr><th>Date</th><th>Event</th><th>Price</th></tr>";

//step 6
var endDate = new Date(thisDay.getTime()+14*24*60*60*1000);
// step 7
loop:
for(var i=0; i < eventDates.length; i++){
   // step 8
   // step 8 a
   var eventDate = new Date(eventDates[i]);
   // step 8 b
   var eventDay = eventDate.toDateString();
   // step 8 c
   var eventTime = eventDate.toLocaleDateString();

   // step 8 d
   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr><td>" + eventDay + " @ " + eventTime + "</td><td>" + eventDescriptions[i] + "</td><td>" + eventPrices[i] + "</td></tr>";
   }

}
// step 9
tableHTML += "</table>";
// step 10
document.getElementById("eventList").innerHTML = tableHTML;

