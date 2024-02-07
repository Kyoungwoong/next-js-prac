import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET() {

  const users = await prisma.user.findMany();

  return NextResponse.json(users);
  
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {status:404});
  }

  const user = await prisma.user.findUnique({
    where: {email: body.email}
  });

  if (user) {
    return NextResponse.json({error: "User Already Exists"}, {status:400});
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  });

  return NextResponse.json(newUser);
}

export async function PUT(request: NextRequest, {params} : {params: {id: number}}) {

  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {status:404});
  }

  if (!body.name) {
    return NextResponse.json({error: "Name is required"}, {status:404});
  }

  if (params.id > 10) {
    return NextResponse.json({error: "User Not Found"}, {status:404});
  }
  
  return NextResponse.json({id: 1, name:body.name});
}

export async function DELETE(request: NextRequest, {params} : {params: {id: number}}) {

  if (params.id > 10) {
    return NextResponse.json({error: "User Not Found"}, {status:404});
  }
  
  return NextResponse.json({});
}