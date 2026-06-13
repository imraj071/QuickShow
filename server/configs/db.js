import mongoose from 'mongoose';

// import dns from 'node:dns/promises'
// dns.setServers(["1.1.1.1", "1.0.0.1"]);

const dbName = "quickshow"

const connectDB = async () => {
    try{
        
        await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        mongoose.connection.on('connected', () => console.log('Database connected'));
        

    }catch(error){
        console.log(error.message);
        //process.exit(1)
    }
}

export default connectDB
