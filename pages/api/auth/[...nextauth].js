import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { verify } from "bcryptjs";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && (await verify(credentials.password, user.password))) {
          return { id: user.id, email: user.email };
        }
        return null;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.SECRET,
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
});
