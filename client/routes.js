Router.route('/', function () {
   this.render('mainLayout')
 })

Router.route('/manage-alerts', function () {
  this.render('manageAlerts')
  this.layout('SideLayout')
})

Router.route('/add-alerts', function () {
  this.render('addAlertTemplate')
  this.layout('SideLayout')
})

Router.route('/edit-alerts', function () {
  this.render('editAlertTemplate')
  this.layout('SideLayout')
})

Router.route('/send-alerts', function () {
  this.render('sendAlertTemplate')
  this.layout('SideLayout')
})