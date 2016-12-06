import { Markers } from '../../lib/collections/markers.js'

Meteor.publish('markers', ()=>{
    return Markers.find({})
})