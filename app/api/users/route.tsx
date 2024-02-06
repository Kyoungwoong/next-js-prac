import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "A"},
    { id: 2, name: "B"},
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({error: "Name is required"}, {status:404});
  }

  return NextResponse.json({id: 1, name:body.name});
}

export async function PUT(request: NextRequest, {params} : {params: {id: number}}) {

  const body = await request.json();

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