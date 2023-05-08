'use client';
import { colors } from '@/styles/theme/foundations/colors';
import { textStyles } from '@/styles/theme/foundations/textStyles';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box css={textStyles.h1} color={colors.primary}>
        pretendard + chakra custom token 적용 test
      </Box>
    </main>
  );
}
