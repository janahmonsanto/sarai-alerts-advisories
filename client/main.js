import { Mongo } from 'meteor/mongo';
import './main.html';

Markers = new Mongo.Collection('markers');  

Meteor.startup(function() {  
  GoogleMaps.load();
});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(12.8797, 121.7740),
        zoom: 5
      };
    }
  }
});

Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
    google.maps.event.addListener(map.instance, 'click', function(event) {
      Markers.insert({lat: event.latLng.lat(), lng: event.latLng.lng()}); 
    });   

    var markers = {};
    
    Markers.find().observe({
      added: function(document) {
        //create marker for the document
        var marker = new google.maps.Marker({
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(document.lat, document.lng),
          map: map.instance,
          title: 'Click for more details',

          //store document _id on the marker
          id: document._id
        });

        contentString =
          '<div class="alertPreview">' + 
            '<img class="alertPreviewImage" src="">' + 
            '<label class="alertPreviewTitle">' + 
              'Alert Title' + 
            '</label>' +
            '<text class="alertPreviewContent">' +
              'This is where the content goes. Lorem ipsum blah blah blah.' +
            '</text>' +
            '<button type="button "class="btn btn-link alertDetailsButton">' + 
              'More Details' + 
            '</button>' +
          '</div>';

       var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        //show marker infowindow
        google.maps.event.addListener(marker, 'click', function(event) {
           console.log("marker clicked");
           infowindow.open(map, marker);
           //$('#markerModal').modal('show');
           //$('[data-toggle="popover"]').popover('show'); 
           //$('#markerPopover').popover('show');
        });

        var titleString = 'Type of Alert: Pest';

        var infowindowtitle = new google.maps.InfoWindow({
            content: titleString,
            buttons: {close: {visible: false}}
        });     
        
        //show marker infowindow title (hover)
        google.maps.event.addListener(marker, 'mouseover', function(event) {
            infowindowtitle.open(map, marker);
        });

        //hide marker infowindow title (mouse out)
        google.maps.event.addListener(marker, 'mouseout', function(event) {
          infowindowtitle.close();
        });
      }

    });

  });
});