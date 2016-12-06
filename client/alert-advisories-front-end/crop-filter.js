import { Meteor } from 'meteor/meteor'
import { Markers } from '../../lib/collections/markers.js'

Template.cropFilter.events({
    'click #cropBanana': function(e) {
        if ($('#cropBanana').is(':checked')) {
            var filteredCrop = $('#cropBanana').val()
            console.log('CROP SELECTED: ' + filteredCrop)
            const cropMarkers = Markers.find({alertCrops: { $ne: filteredCrop}}).fetch('_str')
            console.log(cropMarkers)
            //return cropMarkers
            // Meteor.call('filterCrop', filteredCrop)
        }
    },

     'click #cropCacao': function(e) {
         if ($('#cropCacao').is(':checked')) {
            var filteredCrop = $('#cropCacao').val()
            console.log(filteredCrop)
            // Meteor.call('filterCrop', filteredCrop)
         }
    },

     'click #cropCoconut': function(e) {
         if ($('#cropCoconut').is(':checked')) {
            var filteredCrop = $('#cropCoconut').val()
            console.log(filteredCrop)
            // Meteor.call('filterCrop', filteredCrop)
         }
    },

    'click #cropCoffee': function(e) {
        if ($('#cropCoffee').is(':checked')) {
            var filteredCrop = $('#cropCoffee').val()
            console.log(filteredCrop)
            // Meteor.call('filterCrop', filteredCrop)
        }
    },

    'click #cropCorn': function(e) {
        if ($('#cropCorn').is(':checked')) {
            var filteredCrop = $('#cropCorn').val()
            console.log('CROP SELECTED: ' + filteredCrop)
            const cropMarkers = Markers.find({alertCrops: { $ne: filteredCrop}}).fetch('_str')
            console.log(cropMarkers)
            // Meteor.call('filterCrop', filteredCrop)
        }
    },

    'click #cropRice': function(e) {
        if ($('#cropRice').is(':checked')) {
            var filteredCrop = $('#cropRice').val()
            console.log(filteredCrop)
            // Meteor.call('filterCrop', filteredCrop)
        }
    }
})