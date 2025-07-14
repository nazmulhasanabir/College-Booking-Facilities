// app/api/application/review/route.js (Corrected POST handler)
import { client } from "@/lib/mongoClient";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // CHANGE THIS LINE: Parse as JSON
    const { email, review, candidateName, collegeName } = await request.json();

    if (!email || !review) {
      return NextResponse.json(
        { message: "Missing email or review" },
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db("CollegeAdmission");
    const reviews = db.collection("reviews");

    const result = await reviews.insertOne({
      email,
      review,
      // You might want to get candidateName and collegeName from the application object
      // or pass them from the client if they are relevant for the review.
      // For now, using the optional values as in your original code.
      candidateName: candidateName || "Anonymous",
      collegeName: collegeName || null,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Review submitted successfully", insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Review submission failed:", error);
    return NextResponse.json(
      { message: "Failed to submit review", error: error.message },
      { status: 500 }
    );
  } finally {
    // Consider managing client connection more persistently in a real app
    await client.close();
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const collegeName = searchParams.get("collegeName");

    await client.connect();
    const db = client.db("CollegeAdmission");
    const reviews = db.collection("reviews");

    const query = {};
    if (email) query.email = email;
    if (collegeName) query.collegeName = collegeName;

    const data = await reviews.find(query).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Fetching reviews failed:", error);
    return NextResponse.json(
      { message: "Failed to fetch reviews", error: error.message },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

// ... (GET handler remains the same)