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

        //click marker event
        google.maps.event.addListener(marker, 'click .open-insert-alertPreviewSection', function(event) {
           console.log("marker clicked");
           
        });

      }

    });

  });
});