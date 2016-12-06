import { Markers } from '../../lib/collections/markers.js'

Template.alertIndex.onCreated( ()=> {  
    Meteor.subscribe('markers')
})

Template.alertIndex.helpers({
    markers: function() {
        const markers = Markers.find({}).fetch()
        return markers
    }
})