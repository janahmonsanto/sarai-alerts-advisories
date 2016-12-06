import { Alerts } from '../../lib/collections/alerts.js'

Meteor.publish('alerts', ()=>{
    return Alerts.find({})
})