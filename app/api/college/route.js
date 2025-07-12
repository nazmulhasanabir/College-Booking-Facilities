// import client from "@/lib/mongo";
import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";
// MongoDB URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0.pb8np.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// MongoDB client setup
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default client;
export async function GET(req) {
  try {
    await client.connect();
    const db = client.db("CollegeBookingFacilities");
    const collegeCollection = db.collection("College");

    const college = await collegeCollection.find({}).toArray();

    return NextResponse.json({
      message: "success",
      status: 200,
      data: college,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch colleges",
        error: error.message,
      },
      { status: 500 }
    );
  } finally {
    // Optional: Do not close the client for serverless functions
    // await client.close();
  }
}