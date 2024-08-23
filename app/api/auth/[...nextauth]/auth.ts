import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        // TODO: Добавить логику авторизации
        return {
          id: "1",
          name: "Danil",
          role: "ADMIN",
        };
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) token.role = user.role;
      return token;
    },
    session: async ({ session, token }: any) => {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};