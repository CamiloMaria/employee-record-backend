import * as mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Camio:icalriox321@cluster0.yqtoj8y.mongodb.net/extension-finder?retryWrites=true&w=majority',
    );
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
