import { Meteor } from 'meteor/meteor'
import { Emails } from '../../lib/collections/emails.js'

Template.navModal.events({
    'click #subscribeButton': function(e) {
        var userEmail = $('#emailID').val()
        Meteor.call('addEmail', userEmail)
    }
})

Template.navModal.helpers({
    loginStatus: function () {
        console.log(FB.getLoginStatus())
    }
})