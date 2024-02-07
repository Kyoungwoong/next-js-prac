import {NextRequest, NextResponse} from "next/server";
import middleware from "next-auth/middleware";

export default middleware;

// export {default} from "next-auth/middleware";

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL("/new-page", request.url));
// }

export const config = {
    matcher: ["/users/:id*"],
}

// 이렇게 하면 항상 new-page에 리다이렉션 => 성능상 악영향
// 조건부로 리다이렉트 구현해야함.