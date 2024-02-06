import { NextRequest, NextResponse } from "next/server";
import schema from "../users/schema";

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 1, name: "Apple", price: 2.5},
        {id: 2, name: "Bread", price: 3.5},
    ]);
}

export async function POST(request: NextRequest) {

    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status:404});
    }

    return NextResponse.json({id: 10, name: body.name, price: body.price});

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