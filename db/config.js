require('dotenv').config();
const mongoose =require('mongoose');


const ConnectToDataBase=()=>{
  // console.log('Start Connections')
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("error", (err) => {
      console.log("err", err);
    });

    mongoose.connection.on("connected", (err, res) => {
      console.log("DB Connection establish");
    });
  } catch (error) {
    console.log(error.message);
  }
}



// const OffConnections = async () => {

//   await mongoose.connection.close();

// }

// const ONConnections = async () => {

//   await ConnectToDataBase();

// }

exports.Connect=ConnectToDataBase;
// exports.OffConnections=OffConnections;
// exports.ONConnections=ONConnections;