'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import authApi from '@/apis/auth';

export default function AuthProvider() {
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

  return <></>;
}
