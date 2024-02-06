import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, {params}: {params: {id: number}}) {

    if (params.id > 10) {
        // 사용자 id가 10보다 큰 경우 404 오류 출력
        return NextResponse.json({error: "User Not Found"}, {status: 404});
    }

    // 사용자 정보를 응답으로 전달
    return NextResponse.json({id: 1, name:"youngwoong"});

}