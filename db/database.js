import mongoose from "mongoose"

const connectDB = function(dburl) {
  mongoose.connect(dburl)
    .then(() => {
      console.log("MONGODB is connected")
    }).catch((err) => {
      cosole.log(err)
    })
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default connectDB