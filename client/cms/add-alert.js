import { Meteor } from 'meteor/meteor'
import { Markers } from '../../lib/collections/markers.js'

Template.addAlertTemplate.events({
    'click #addButton': function (e) {
        const title = $('#alertTitle').val()
        const date = $('#dateRange').val()
        const long = $('#longitude').val()
        const lat = $('#latitude').val()
        const details = $('#details').val()

        if($('#addBanana').is(':checked')) {
            var addedCrop = $('#addBanana').val()
        }
        else{
            if($('#addCacao').is(':checked')) {
                var addedCrop = $('#addCacao').val()
            }   
            else{
                if($('#addCoconut').is(':checked')) {
                    var addedCrop = $('#addCoconut').val()
                }
                else{
                    if($('#addCoffee').is(':checked')) {
                        var addedCrop = $('#addCoffee').val()
                    }
                    else {
                        if($('#addCorn').is(':checked')) {
                            var addedCrop = $('#addCorn').val()
                        }
                        else {
                            if($('#addRice').is(':checked')) {
                                var addedCrop = $('#addRice').val()
                            }
                        }
                    }

                }

            }
        }

         if($('#addHigh').is(':checked')) {
            var adddedSeverity = $('#addHigh').val()
        }
        else{
            if($('#addMedium').is(':checked')) {
                var addedSeverity = $('#addMedium').val()
            }   
            else{
                if($('#addLow').is(':checked')) {
                    var addedSeverity = $('#addLow').val()
                }
                else{
                    if($('#addNormal').is(':checked')) {
                        var addedSeverity = $('#addNormal').val()
                    }
                }

            }

        }

        if($('#addWeather').is(':checked')) {
            var addedType = $('#addWeather').val()
        }
        else{
            if($('#addPest').is(':checked')) {
                var addedType = $('#addPest').val()
            }   
            else{
                if($('#addDiseases').is(':checked')) {
                    var addedType = $('#addDiseases').val()
                }
            }
        }
    
        //console.log(title, date, long, lat, details, addedCrop, addedSeverity, addedType)

        Meteor.call('addAlert', title, date, long, lat, details, addedCrop, addedSeverity, addedType)
    }
})

