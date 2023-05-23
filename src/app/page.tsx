'use client';

import GoogleLogin from 'react-google-login';
import { Box } from '@chakra-ui/react';
import useGoogleLogin from '@/hooks/useGoogleLogin';
import { colors } from '@/styles/theme/foundations/colors';
import { textStyles } from '@/styles/theme/foundations/textStyles';
import instance from '@/apis';

export default function Home() {
  const { onSuccess, onFailure } = useGoogleLogin();

  const handleAnotherApi = async () => {
    const resume = await instance.get('/resumes');
    console.log(resume);
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Box css={textStyles.h1} color={colors.primary}>
        pretendard + chakra custom token 적용 test
      </Box>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <button onClick={handleAnotherApi}>테스트를 위해 다른 API 호출</button>
    </main>
  );
}
