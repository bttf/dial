var dial = require('../');

dial.on('device', function(device){

  device.launch('YouTube', {
    v: 'cKG5HDyTW8o'
  }).then(function(){
    console.log('Watch Your TV!');
  }, function(err){
    console.error('Something Went Wrong: ', err);
  });

});

dial.discover();
