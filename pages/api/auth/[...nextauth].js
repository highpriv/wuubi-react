import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const res = await axios.post("http://localhost:3000/login", {
          email,
          password,
        });

        const user = res.data;

        if (user.token) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return "/u/" + user.token;
    },
  },
};

export default NextAuth(authOptions);
