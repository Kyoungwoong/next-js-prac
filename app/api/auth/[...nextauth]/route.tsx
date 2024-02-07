import NextAuth from "next-auth"

const handler = NextAuth({});

export {handler as GET, handler as POST};

// 그리고 env에 nextauth url / secrete 첨부