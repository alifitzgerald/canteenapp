var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


var api_key = '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'

var sendgrid  = require('sendgrid')(api_key);

app.post("/email", function(req, res) {
  
  console.log('backend was reached');
  var payload = {
    to: 'alikfitz@gmail.com',
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.text,
    html: req.body.html
  };

  sendgrid.send(payload, function(err, json) {
  if (err) { console.error(err); }
  console.log(json);
});



});


