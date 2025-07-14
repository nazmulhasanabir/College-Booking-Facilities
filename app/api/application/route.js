import { client } from "@/lib/mongoClient";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.formData();

    const candidateName = body.get("candidateName");
    const subject = body.get("subject");
    const email = body.get("email");
    const phone = body.get("phone");
    const address = body.get("address");
    const dob = body.get("dob");
    const collegeName = body.get("collegeName");
    const image = body.get("image"); 

    if (!candidateName || !email || !collegeName) {
      return NextResponse.json(
        { message: "Required fields missing" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db("CollegeAdmission");
    const applications = db.collection("applications");

    const result = await applications.insertOne({
      candidateName,
      subject,
      email,
      phone,
      address,
      dob,
      collegeName,
      image,
      createdAt: new Date()
    });

    return NextResponse.json(
      { message: "Application submitted", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Application submission failed:", error);
    return NextResponse.json(
      { message: "Failed to submit application", error: error.message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

// Handle GET — Fetch by email
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db("CollegeAdmission");
    const applications = db.collection("applications");

    const userApplications = await applications.find({ email }).toArray();

    return NextResponse.json(userApplications, { status: 200 });
  } catch (error) {
    console.error("Fetching applications failed:", error);
    return NextResponse.json(
      { message: "Failed to fetch", error: error.message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}