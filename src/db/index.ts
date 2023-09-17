import mongoose, { Connection } from 'mongoose';
async function connectToMongoDB(): Promise<Connection> {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // @ts-ignore
      useNewUrlParser: true,
      useUnifiedTopology: true,
       
    });

    console.log('Connected to Database :)');

    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export default connectToMongoDB;
