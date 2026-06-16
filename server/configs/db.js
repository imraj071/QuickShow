import mongoose from 'mongoose';

import dns from 'node:dns/promises'
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const dbName = "quickshow"

let isConnected = false;

const connectDB = async () => {

    if(isConnected) return;

    try{
        
        mongoose.connection.on('connected', () => console.log('Database connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`,{
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            bufferCommands: false,
        })

        isConnected = true;
        

    }catch(error){
        console.log(error.message);
        //process.exit(1)
    }
}

export default connectDB
