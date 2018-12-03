const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
// var Gpio = require('onoff').Gpio;
// const sensor = require('ds18b20-raspi');


// var LEDred = new Gpio(21, 'out');
// var LEDblue = new Gpio(20, 'out');
// var tempInterval = setInterval(getTempandLed, 1000);
// var i = 0;
// var tempF = 40;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hvac-status', (req, res) => {
  var status = getTempAndLED();
  res.send({ status: status });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

var server = app.listen(port, () => console.log(`Listening on port ${port}`));

function getTempAndLED() {
    //message out to all sockets connected the temp
    // tempF = sensor.readSimpleF(1);
    // tempF = Math.round(tempF);
    var status = 'OFF';
  
  
    // if(heat != 0){
    //   if(settemp >= tempF){
    //     LEDred.writeSync(1);
    //     LEDblue.writeSync(0);  
    //     status = 'Heat On';    
    //   }
    //   else{
    //     LEDred.writeSync(0);
    //     LEDblue.writeSync(0); 
    //     status = 'OFF';     
    //   }
    // }
  
    // if (ac != 0) {
    //   if (tempF > settemp) {
    //     LEDblue.writeSync(1);
    //     LEDred.writeSync(0);
    //     status = 'AC On';      
    //   }
    //   else {
    //     LEDblue.writeSync(0);
    //     LEDred.writeSync(0);
    //     status = 'OFF';      
    //   }
    // }
  
    // if (auto != 0) {
    //   if (settemp > tempF) {
    //     LEDred.writeSync(1);
    //     LEDblue.writeSync(0);
    //     status = 'Heat On';
    //   }
    //   else if (settemp == tempF) {
    //     LEDred.writeSync(0);
    //     LEDblue.writeSync(0);
    //     status = 'OFF';
    //   }
    //   else {
    //     LEDred.writeSync(0);
    //     LEDblue.writeSync(1);
    //     status = 'AC On';
    //   }
    // }

    return status;
  }