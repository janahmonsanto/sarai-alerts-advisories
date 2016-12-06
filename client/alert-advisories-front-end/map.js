import { Meteor} from 'meteor/meteor'
import { Session } from  'meteor/session'
import { Markers } from '../../lib/collections/markers.js'


Template.map.onCreated( ()=> {
  Meteor.subscribe('markers')
})

// Template.map.onRendered(() => {
//   GoogleMaps.load();
// })

Meteor.startup(function() {
  GoogleMaps.load()

})

Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
    console.log("map is ready")

    Markers.find().observe({
      added: function(document) {
        //create marker for the document
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(document.lat, document.lng),
          map: map.instance,
          title: document.alertName + ' in ' + document.alertProvince,
          visible: true,

             //store document _id on the marker
          id: document._id
        })

        //show marker infowindow
        google.maps.event.addListener(marker, 'click', function(event) {
          console.log("marker clicked: " + document.alertName)
          Session.set('alertNameSession', document.alertName)
          Session.set('alertProvinceSession', document.alertProvince)
          Session.set('alertMunicipalitySession', document.alertMunicipality)
          Session.set('alertDetailsSession', document.alertDetails)
          
          $('#alertPreviewModal').modal('show')
          
          //Meteor.apply('showPreview', document)

          // infowindow.open(map, marker)

          // console.log($('#moreDetailsButton').html())
          // //event listener for infowindow button
          // google.maps.event.addListener($('#moreDetailsButton').html(), 'click', function(event) {
          //     console.log('button clicked')
          //   //meteorcall
          // })
        })

      //   //content of alert preview (ES6 template strings/literal)
      //   contentString =
      //     `<div class="alertPreview">
      //       <img class="alertPreviewImage" src="">
      //       <h3 class="alertPreviewTitle">` +
      //         document.alertName
      //       + `</h3>
      //        <h6 class="alertPreviewLocation"> `
      //         + document.alertMunicipality + ` ` + document.alertProvince  +
      //      ` </h6>
      //       <text class="alertPreviewContent">` +
      //         document.alertDetails + ` </br>
      //       </text>` +
      //       // <button type="button" id="moreDetailsButton" class="btn btn-link alertDetailsButton" data-toggle="modal" data-target="#alertModal">
      //       //   More Details
      //       // </button>
      //     `</div>`

      //  var infowindow = new google.maps.InfoWindow({
      //     content: contentString,
      //     maxWidth: 300
      //   })       

        // google.maps.event.addListener(map.instance, 'click', function(event) {
        //   console.log('map clicked')
        //   infowindow.close()
        // })

      }

    })

 })
})



Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(12.8797, 121.7740),
        zoom: 5
      }
    }
  },

  nameSession: function() {
    var nameSession = Session.get('alertNameSession')
    return nameSession
  },

  provinceSession: function() {
    var provinceSession = Session.get('alertProvinceSession')
    return provinceSession
  },

  municipalitySession: function() {
    var municipalitySession = Session.get('alertMunicipalitySession')
    return municipalitySession
  },

  detailsSession: function() {
    var detailsSession = Session.get('alertDetailsSession')
    return detailsSession
  }

})

