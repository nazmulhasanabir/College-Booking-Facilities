import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});