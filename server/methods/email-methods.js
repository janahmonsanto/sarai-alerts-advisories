import { Meteor } from 'meteor/meteor'
import { Emails } from '../../lib/collections/emails.js'
import { Email } from 'meteor/email'

Meteor.methods({
    'addEmail': function(text) {
        Emails.insert({ 
            text,
            createdAt: new Date()
        })
    },

    'deleteEmail': function(id) {
        Emails.remove(id)
    },

    'sendEmail': function(to, from, subject, message) {
        check([to, from, subject, message], [String])
        this.unblock()
        Email.Send({
            to: to,
            from: from,
            subject: subject,
            text: message
        })
    }
})