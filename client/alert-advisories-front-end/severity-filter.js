import { Meteor } from 'meteor/meteor'

Template.severityFilter.events({
    
    'click #severityHigh': function(e) {
        if ($('#severityHigh').is(':checked')) {
            var filteredSeverity = $('#severityHigh').val()
            console.log('ALERT SEVERITY: ' + filteredSeverity)
            Meteor.call('filterSeverity', filteredSeverity)
        }
    },

    'click #severityMedium': function(e) {
        if ($('#severityMedium').is(':checked')) {
            var filteredSeverity = $('#severityMedium').val()
            console.log('ALERT SEVERITY: ' + filteredSeverity)
            Meteor.call('filterSeverity', filteredSeverity)
        }
    },

    'click #severityLow': function(e) {
        if ($('#severityLow').is(':checked')) {
            var filteredSeverity = $('#severityLow').val()
            console.log('ALERT SEVERITY: ' + filteredSeverity)
            Meteor.call('filterSeverity', filteredSeverity)
        }
    },

    'click #severityNormal': function(e) {
        if ($('#severityNormal').is(':checked')) {
            var filteredSeverity = $('#severityNormal').val()
            console.log('ALERT SEVERITY: ' + filteredSeverity)
            Meteor.call('filterSeverity', filteredSeverity)
        }
    }
})