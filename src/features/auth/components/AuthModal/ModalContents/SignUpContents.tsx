import { Flex, ModalBody } from '@chakra-ui/react';
import { Route } from 'next';
import Link from 'next/link';

import Button from '@/components/Button/Button';
import IconGoogleLogo from '@/components/Icon/IconGoogleLogo';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import { ROUTES } from '@/shared/constants/routes';

type SignUpContentsProps = {
  signIn: () => void;
};

const SignUpContents = ({ signIn }: SignUpContentsProps) => {
  return (
    <>
      <ModalHeader>
        <ModalHeader.Title
          title="인사이트 아웃 시작하기"
          subTitle="구글 계정에 빠르게 로그인하고 경험정리를 시작해보세요!"
        />
      </ModalHeader>
      <ModalBody>
        <Flex justifyContent={'center'}>
          <Button size="XL" variant="gray900" leftIcon={<IconGoogleLogo />} preserveOriginalIconColor onClick={signIn}>
            구글로 빠르게 시작하기
          </Button>
        </Flex>
      </ModalBody>
      <ModalFooter>
        <Flex flexDir={'column'}>
          <span className="text-light text-[10px] font-medium leading-[14px]">
            로그인 시&nbsp;
            <Link href={ROUTES.PRIVACY_POLICY as Route} className="underline text-primary-500" target="_blank">
              개인정보보호 정책
            </Link>
            &nbsp;및&nbsp;
            <Link href={ROUTES.TERMS_OF_SERVICE as Route} className="underline text-primary-500" target="_blank">
              서비스 약관
            </Link>
            에 동의하는 것으로 간주하며,
          </span>
          <span className="text-light text-[10px] font-medium leading-[14px]">
            서비스 이용을 위해 이메일과 이름을 수집합니다.
          </span>
        </Flex>
      </ModalFooter>
    </>
  );
};

export default SignUpContents;
