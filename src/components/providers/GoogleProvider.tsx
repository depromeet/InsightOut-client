'use client';

import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import authApi from '@/apis/auth';

export default function GoogleProvider({ children }: StrictPropsWithChildren) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    function start() {
      gapi.client.init({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  useEffect(() => {
    const accessToken = axios.defaults.headers['Authorization'];
    const refreshToken = getCookie('refreshToken');
    if (accessToken || !refreshToken) return;

    (async () => {
      const response = await authApi.reIssue();
      const accessToken = response.data.accessToken;
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    })();
  }, []);

  return <>{children}</>;
}
