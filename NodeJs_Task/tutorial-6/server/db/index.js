const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/drons',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoCreate: true
  }).catch(e => {
  console.error('Connection error', e.message);
});

const db=mongoose.connection;
module.exports=db;