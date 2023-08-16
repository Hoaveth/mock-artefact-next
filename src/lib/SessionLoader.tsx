import type { FC } from 'react';

import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { setToken } from '@/lib/http';

type withAuthenticationFn = (Component: FC) => FC;

const SessionLoader: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (props): JSX.Element | null => {
    const router = useRouter();
    const { status, data } = useSession();

    if (router.pathname === '/auth/sign-in' && status === 'authenticated') {
      router.push('/');
    }

    if (status === 'unauthenticated') {
      router.push('/auth/sign-in');
    }

    if (status === 'authenticated') {
      setToken(data.accessToken);
    }

    return status === 'authenticated' ? <Component {...props} /> : null;
  };

  return Authenticated;
};

export default SessionLoader;
