(function() {
     var hotel = {
          name : 'Park',
          roomRate : 240,
          discount : 15,
          offerPrice : function() {
               var offerRate = this.roomRate * ((100 - this.discount) / 100 );
               return offerRate;
          }
     };

     var hotelName, roomRate, specialRate;

     hotelName =document.getElementById('hotelName');
     roomRate =document.getElementById('roomRate');
     specialRate =document.getElementById('specialRate');

     hotelName.textContent = hotel.name;
     roomRate.textContent = '$'+ hotel.roomRate.toFixed(2);
     specialRate.textContent = '$' + hotel.offerPrice();

     var expiryMsg;
     var today;
     var elEnds;

     function offerExpires(today){
          var dayNames, monthNames, weekFromToday, day, month, year, date;

          weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

          dayNames = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

          monthNames = ['january','febuary','march','april','may','june','july','august','september','october','november','december'];

          day = dayNames[weekFromToday.getDay()];
          date = weekFromToday.getDate();
          month = monthNames[weekFromToday.getMonth()];
          year = weekFromToday.getFullYear();

          expiryMsg = 'Offer Expires Next : ';
          expiryMsg + = day + '<br> ('+date +' '+month+' '+year' )';
          return expiryMsg;
     }

     today = new Date();
     elEnds = document.getElementById('offerEnds');
     elEnds.innerHTML = offerExpires(today);

}());
