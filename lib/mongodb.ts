import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/t_automobile';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

import type { Mongoose } from 'mongoose';
type MongooseCache = { conn: Mongoose | null, promise: Promise<Mongoose> | null };
const globalWithMongoose = global as typeof global & { mongoose?: MongooseCache };
const cached: MongooseCache = globalWithMongoose.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) {
    console.log('MongoDB already connected');
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => {
      console.log('MongoDB connection successful');
      return mongoose;
    }).catch((err) => {
      console.error('MongoDB connection failed:', err);
      throw err;
    });
  }
  try {
    cached.conn = await cached.promise;
    globalWithMongoose.mongoose = cached;
    return cached.conn;
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}
