const mongoose = require('mongoose');

mongoose.connect( 'mongodb+srv://user:password@clustermongo0.0rzrt.gcp.mongodb.net/chat?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));
