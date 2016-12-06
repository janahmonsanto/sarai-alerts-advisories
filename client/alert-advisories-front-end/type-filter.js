import { Meteor } from 'meteor/meteor'

Template.typeFilter.events({
    'click #typeWeather': function(e) {
        if ($('#typeWeather').is(':checked')) {
            var filteredType = $('#typeWeather').val()
            console.log('ALERT TYPE: ' + filteredType)
            Meteor.call('filterType', filteredType)
        }
    },

    'click #typePest': function(e) {
        if ($('#typePest').is(':checked')) {
            var filteredType = $('#typePest').val()
            console.log('ALERT TYPE: ' + filteredType)
            Meteor.call('filterType', filteredType)
        }
    },

    'click #typeDiseases': function(e) {
        if ($('#typeDiseases').is(':checked')) {
            var filteredType = $('#typeDiseases').val()
            console.log('ALERT TYPE: ' + filteredType)
            Meteor.call('filterType', filteredType)
        }
    }
})