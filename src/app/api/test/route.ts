import { connectDB } from "@/lib/mongodb";
import Test from "@/models/Test";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const doc = await Test.create({
      name: "Amit",
      message: "Mongo connection successful 🎉"
    });

    return NextResponse.json({
      success: true,
      data: doc
    });

  } catch (err:any) {
    return NextResponse.json({
      success: false,
      error: err.message
    }, { status: 500 });
  }
}
