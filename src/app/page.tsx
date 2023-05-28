'use client';

import GoogleLogin from 'react-google-login';
import { Box } from '@chakra-ui/react';
import useGoogleLogin from '@/hooks/useGoogleLogin';
import { colors } from '@/styles/theme/foundations/colors';
import { boxShadow } from '@/styles/theme/foundations/boxShadow';
import { textStyles } from '@/styles/theme/foundations/textStyles';
import instance from '@/apis';
import Button from '@/components/Button/Button';

export default function Home() {
  const { onSuccess, onFailure } = useGoogleLogin();

  const handleAnotherApi = async () => {
    const resume = await instance.get('/resumes');
    console.log(resume);
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <span className="h1 text-error shadow-toast">head1 - tailwind custom theme</span>
      <Box css={textStyles.h1} color={colors.error} boxShadow={boxShadow.toast}>
        head1 - chakra-ui custom theme
      </Box>
      <span className="text-purple-300 h2 shadow-insightCard">head2</span>
      <Box css={textStyles.h2} color={colors.purple['300']} boxShadow={boxShadow.insightCard}>
        head1 - chakra-ui custom theme
      </Box>
      <span className="text-gray-900 subhead1 shadow-S5">subhead1</span>
      <Box css={textStyles.subhead1} color={colors.gray[900]} boxShadow={boxShadow.S5}>
        head1 - chakra-ui custom theme
      </Box>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <Button variant="primary" size="lg" onClick={handleAnotherApi}>
        테스트를 위해 다른 API 호출
      </Button>
    </main>
  );
}
