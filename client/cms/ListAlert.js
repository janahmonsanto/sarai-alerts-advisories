import { Markers } from '../../lib/collections/markers.js'
import { Meteor } from 'meteor/meteor'

Template.listAlert.onCreated( ()=> {  
    Meteor.subscribe('markers')
})

Template.listAlert.helpers({
	markers: function() {
		const markers = Markers.find({}).fetch()
		return markers
	}
})

Template.listAlert.events({
	'click #deleteButton': function(e) {
		console.log(this._id)
		Meteor.call('deleteAlert', this._id)
	},

	'click #editButton': function(e) {
		var editId = this._id
		const editAlert = Markers.find({_id: editId})
		console.log(editAlert)
		Session.set('editAlertSession', editAlert)
	}
})