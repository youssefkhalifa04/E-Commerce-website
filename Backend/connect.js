const mongoose = require('mongoose');
mongoose.connect(process.env.db_url )
 .then(
    ()=>{
        console.log('connected')
    }
 )
  .catch(
    (err)=>{
        console.log(err)
    }
  )

  module.exports = mongoose;