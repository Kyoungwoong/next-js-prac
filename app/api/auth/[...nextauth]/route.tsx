import NextAuth, {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/prisma/client";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "email", placeholder: "Email" },
              password: {  label: "Password", type: "password", placeholder: "password"},
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password) return null;

              const user = await prisma.user.findUnique({
                where: {email: credentials.email}
              });

              if (!user) return null;

              const passwordMatch = await bcrypt.compate(credentials.password, user.hasedPassword!);
        
              return passwordMatch ? user: null;
            }
          })
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