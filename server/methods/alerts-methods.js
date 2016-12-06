import { Meteor } from 'meteor/meteor'
import { Markers } from '../../lib/collections/markers.js'

Meteor.methods({
    //add marker
    'addAlert': function(title, date, long, lat, details, addedCrop, addedSeverity, addedType) {
        Markers.insert({ 
            alertName: title,
            dateRange: date,
            lng: long,
            lat: lat,
            alertDetails: details,
            alertCrops: addedCrop,
            alertSeverity: addedSeverity,
            alertType: addedType,
            createdAt: new Date()            
        })
    },

    //delete marker
    'deleteAlert': function(id) {
		Markers.remove(id)
	},

    //edit marker
    'editAlert': function(id) {
		Markers.update(id)
    },

     //method to filter crops
    'filterCrop': function(text) {
        const cropMarkers = Markers.find({alertCrops: { $ne: text}}).fetch()
        return cropMarkers
    },

    //method to filter severity
    'filterSeverity': function(text) {
        const severityMarkers = Markers.find({alertSeverity: { $ne: true}}).fetch()
        return severityMarkers
    },

    //method to filter type
    'filterType': function(text) {
        const typeMarkers = Markers.find({alertType: { $ne: true}}).fetch()
        return typeMarkers
    }
})