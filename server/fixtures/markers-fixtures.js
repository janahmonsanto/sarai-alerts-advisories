import { Markers } from '../../lib/collections/markers.js'

if (Markers.find().count() === 0) {
	console.log("No Markers")
}