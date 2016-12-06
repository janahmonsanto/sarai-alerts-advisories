import { Alerts } from '../../lib/collections/alerts.js'

if (Alerts.find().count() === 0) {
	console.log("No Alerts")
}