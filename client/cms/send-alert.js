import { Meteor } from 'meteor/meteor'
import { Markers } from '../../lib/collections/markers.js'

Template.sendAlertTemplate.events({
    'click #sendButton': function (e) {
        console.log('clicked Send')
        const to = $('#toSendAlert').val()
        const from = $('#fromSendAlert').val()
        const subject = $('#subjectSendAlert').val()
        const message = $('#messageSendAlert').val()
        Meteor.call('sendEmail', to, from, subject, message)
    }
})