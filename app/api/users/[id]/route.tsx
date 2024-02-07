import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, {params}: {params: {id: string}}) {

    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    });

    if (!user) {
        return NextResponse.json({error: "User Not Found"}, {status:404});
    }

    // 사용자 정보를 응답으로 전달
    return NextResponse.json(user);

}

export async function PUT(
    request: NextRequest,
    {params} : {params: {id: string}}
) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status:404});
    }

    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    });

    if (user) {
        return NextResponse.json({error: "User Already Exists"}, {status:400});
    }

    const updatedUser = await prisma.user.update({
        where: {id: parseInt(params.id)},
        data: {name: body.name, email: body.email}
    })
    
    
    return NextResponse.json(updatedUser);
}

export async function DELETE(
    request: NextRequest,
    {params} : {params: {id: string}}
) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status:404});
    }

    const user = await prisma.user.findUnique({
        where: {id: parseInt(params.id)}
    });

    if (!user) {
        return NextResponse.json({error: "User Not Found"}, {status:400});
    }

    await prisma.user.delete({
        where: {id: parseInt(params.id)}
    });
    
    return NextResponse.json({});
}