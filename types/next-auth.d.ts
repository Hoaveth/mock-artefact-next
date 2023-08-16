import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    id: string;
    name: string;
    email: string;
    role: number;
    accessToken: string;
  }

  interface User {
    id: string;
    name: string;
    email: string;
    accessToken: string;
    role: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    email: string;
    id: string;
    name: string;
    accessToken: string;
    role: number;
  }
}
