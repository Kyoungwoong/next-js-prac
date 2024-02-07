import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/prisma/client";

export const authOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],

    session: { // 세션 방식을 jwt로 바꾸기
        strategy: "jwt",
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};

// 그리고 env에 nextauth url / secrete 첨부
/*
 * GOOGLE_CLIENT_ID= 1067623416159-o5re6lamqdnouhfcn2p8nav3svqg4ok1.apps.googleusercontent.com
 * GOOGLE_CLIENT_SECRET= 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
 */