import { client } from "@/lib/mongoClient";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await client.connect();
    const db = client.db("CollegeAdmission");
    const collection = db.collection("college");

    const colleges = await collection.find({}).toArray();

    return NextResponse.json(colleges, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch college data:", error);
    return NextResponse.json(
      { message: "Failed to fetch college data", error },
      { status: 500 }
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}