'use client';

import { useEffect } from 'react';
import { gapi } from 'gapi-script';

export default function GoogleLoginProvider({ children }: StrictPropsWithChildren) {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  return <>{children}</>;
}
