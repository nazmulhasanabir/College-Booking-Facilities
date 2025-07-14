import { client } from "@/lib/mongoClient";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, image, role } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db("CollegeAdmission");
    const users = db.collection("users");

    // Optional: Check if user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const result = await users.insertOne({ name, email, image, role: role  });

    return NextResponse.json(
      { message: "User created successfully", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("User creation failed:", error);
    return NextResponse.json(
      { message: "Failed to create user", error: error.message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
