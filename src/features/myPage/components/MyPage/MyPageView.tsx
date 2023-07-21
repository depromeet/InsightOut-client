'use client';

import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Skeleton, useDisclosure, useToast } from '@chakra-ui/react';
import { Route } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import authApi from '@/apis/auth/auth';
import onboardingApi from '@/apis/onboarding/onboarding';
import userApi from '@/apis/user/user';
import Button from '@/components/Button/Button';
import TextField from '@/components/Input/TextField/TextField';
import Tag from '@/components/Tag/Tag';
import { JOB_CATEGORIES } from '@/features/auth/components/AuthModal/ModalContents/CategoriesContents';
import { ROUTES } from '@/shared/constants/routes';
import { Field } from '@/shared/constants/user';
import { useUserActions, useUserEmail, useUserField, useUserImageUrl, useUserNickname } from '@/shared/store/user';

import MyPageModal from '../Modal/MyPageModal';

const categories = Object.freeze(
  JOB_CATEGORIES.map(({ title, field }) => ({ title, field })).concat({
    title: '선택하지 않음',
    field: Field.NOT_SELECTED,
  })
);

interface MyPageFormValues {
  nickname: string;
  field: Field;
}

const MyPageView = () => {
  const router = useRouter();
  const userNickname = useUserNickname();
  const userEmail = useUserEmail();
  const userImageUrl = useUserImageUrl();
  const userField = useUserField();

  const { setUserInfo } = useUserActions();

  const { isOpen: isOpenWithdrawModal, onOpen: onOpenWithdrawModal, onClose: onCloseWithdrawModal } = useDisclosure();
  const { isOpen: isOpenSignOutModal, onOpen: onOpenSignOutModal, onClose: onCloseSignOutModal } = useDisclosure();

  const { control, handleSubmit, reset } = useForm<MyPageFormValues>({
    mode: 'onSubmit',
    defaultValues: {
      nickname: userNickname,
      field: userField,
    },
  });

  const toast = useToast();

  const handleSingOut = async () => {
    await authApi.signOut();
    if (window !== undefined) window.location.href = '/';
  };

  const handleWithdraw = async () => {
    await authApi.withdraw();
    if (window !== undefined) window.location.href = '/';
  };

  const onSubmit: SubmitHandler<MyPageFormValues> = async (values) => {
    const data = {
      nickname: values.nickname || userNickname,
      field: values.field,
    };

    try {
      await onboardingApi.patch({ field: true });
      await userApi.patch(data);
      setUserInfo(data);
      toast({
        title: '변경되었습니다.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      toast({
        title: '오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  useEffect(() => {
    /**
     * @TODO userField 값이 업데이트되어도 RHF defaultValue가 업데이트 되지 않음.
     * 강제로 reset 했는데 좋은 방법인지 모르겠음.
     */
    (async () => {
      const { nickname, field } = await userApi.get();
      const defaultValues = { nickname, field };
      reset({ ...defaultValues });
    })();
  }, [reset, userField, userNickname]);

  return (
    <section className="flex bg-white">
      <nav className="flex flex-col justify-between w-[358px] h-screen pt-[114px] pb-[40px] pl-[36px] bg-[#F7F7FA]">
        <ul>
          <h2 className="subhead1 text-main mb-[4px]">마이페이지</h2>
          <li
            className="p-[8px] text-main subhead2 cursor-pointer hover:text-primary-600"
            onClick={() => router.push(ROUTES.MY_PAGE as Route)}>
            계정정보
          </li>
          <li className="p-[8px] text-main subhead2 cursor-pointer hover:text-primary-600" onClick={onOpenSignOutModal}>
            로그아웃
          </li>
        </ul>
        <ul>
          <li>
            <Button size="XL" variant="gray200" onClick={onOpenWithdrawModal}>
              회원탈퇴
            </Button>
          </li>
        </ul>
      </nav>
      <section className="flex flex-col items-center w-full pt-[115px]">
        {userImageUrl ? (
          <div className="flex justify-center items-center w-[124px] h-[124px] mb-[17px] rounded-[40px] bg-gray-50">
            <Image src={userImageUrl} width={70} height={70} alt="user-profile" />
          </div>
        ) : (
          <Skeleton width={'124px'} height={'124px'} rounded={40} marginBottom={17} />
        )}
        {userNickname ? (
          <h1 className="h3 text-main mb-[66px]">{userNickname}님, 만나서 반가워요</h1>
        ) : (
          <Skeleton width={'552px'} height={'52px'} rounded={40} marginBottom={'66px'} />
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[552px] gap-[48px]">
          <Controller
            name="nickname"
            control={control}
            render={({ field: { value, ...restField } }) => (
              <TextField
                {...restField}
                className="b2 text-main hover:text-main"
                mode="naming"
                chipTitle="닉네임"
                value={(value.length > 10 ? value.substring(0, 10) : value) || userNickname}
                maxLength={10}
                placeholder={userNickname}
              />
            )}
          />
          <TextField
            mode="email"
            chipTitle="구글 계정"
            placeholder={userEmail}
            value={userEmail}
            readOnly
            className="form"
          />
          <Controller
            name="field"
            control={control}
            render={({ field: { value, ...restField } }) => (
              <div className="flex flex-col">
                <Tag variant="gray100" size="S" className="inline-block mb-2">
                  직무
                </Tag>
                <select
                  {...restField}
                  className="h-[58px] p-4 b2 rounded-[1rem] border border-gray-300 focus:border-primary-500 hover:border-gray-500 outline-none"
                  value={value || userField}>
                  {categories.map(({ title, field }) => (
                    <option key={field} value={field}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
          <div className="flex justify-end">
            <Button size="XL" variant="gray900" type="submit">
              변경하기
            </Button>
          </div>
        </form>
      </section>
      {isOpenWithdrawModal && (
        <MyPageModal
          title="탈퇴 하시겠습니까?"
          buttonText="회원탈퇴"
          isOpen={isOpenWithdrawModal}
          onClose={onCloseWithdrawModal}
          onClickButton={handleWithdraw}
        />
      )}
      {isOpenSignOutModal && (
        <MyPageModal
          title="로그아웃 하시겠습니까?"
          buttonText="로그아웃"
          isOpen={isOpenSignOutModal}
          onClose={onCloseSignOutModal}
          onClickButton={handleSingOut}
        />
      )}
    </section>
  );
};

export default MyPageView;
