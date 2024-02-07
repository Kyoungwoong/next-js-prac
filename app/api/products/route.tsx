import { NextRequest, NextResponse } from "next/server";
import schema from "../users/schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    
    const products = await prisma.product.findMany({});
    
    return NextResponse.json(products);
}

export async function POST(request: NextRequest) {

    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status:404});
    }

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    });

    return NextResponse.json(newProduct, {status: 201});

    /*
     * // 이 라인은 schema.ts로 처리 가능
     * const name = params.name;
     * const price = params.price;
     *   if (!name) {
     *       return NextResponse.json({error: "Name is required"}, {status:404});
     *   }
     *
     *   if (!price) {
     *       return NextResponse.json({error: "Price is required"}, {status:404});
     *   }
     * return NextResponse.json({id: 10, name:name, price:price});
     */
}