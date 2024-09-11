import { NextAuthOptions, Session, User as NextAuthUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

interface CustomUser extends NextAuthUser {
  role?: string;
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials?.email || !credentials.password) return null;
        if (credentials.email === 'vetlekaradmin@vetlekar' && credentials.password === '868.@123aA') {
          return {
            id: '1',
            name: 'vetlekaradmin',
            role: 'ADMIN',
          } as CustomUser;
        }
        return null;
      } 
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    jwt: async ({ token, user }: { token: JWT; user?: CustomUser }) => {
      if (user) token.role = user.role;
      return token;
    },
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      // @ts-expect-error: потому что не нужно лезть пока работает
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
