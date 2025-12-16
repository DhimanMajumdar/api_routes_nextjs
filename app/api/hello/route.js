import { NextResponse } from "next/server";

export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    age: 26,
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    age: 26,
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    age: 26,
  },
];

export async function GET(request) {
  try {
    return NextResponse.json({
      success: true,
      data: users,
      total: users.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to get users",
      },
      { status: 500 }
    );
  }
}
