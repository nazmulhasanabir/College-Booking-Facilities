// File: /app/api/college/[id]/route.js
import { client } from "@/lib/mongoClient";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    await client.connect();
    const db = client.db("CollegeAdmission");
    const collection = db.collection("college");

    // Find college by ObjectId
    const college = await collection.findOne({ _id: new ObjectId(id) });

    if (!college) {
      return NextResponse.json(
        { message: "College not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(college, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch college details:", error);
    return NextResponse.json(
      { message: "Failed to fetch college details", error },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}