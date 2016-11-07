import { Mongo } from 'meteor/mongo';
import './main.html';

Meteor.startup(function() {  
  GoogleMaps.load();
});

Template.map.helpers({  
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(14.16, 121.21),
        zoom: 8
      };
    }
  }
});
