import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';
import { EnvKeys } from 'src/shared/const-values';

const connectDB = async () => {
  try {
    const config = new ConfigService();
    await mongoose.connect(config.get(EnvKeys.MONGODB_URI));
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
