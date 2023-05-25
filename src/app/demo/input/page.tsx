'use client';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { DevTool as ReactHookFormDevTool } from '@hookform/devtools';

import { Button, Stack, Text } from '@chakra-ui/react';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import TextField from '@/components/Input/TextField/TextField';
import TextLengthMessage from '@/components/Input/TextLengthMessage';

type FormInputs = {
  exampleTextArea: string;
  exampleText: {
    default: string;
    naming: string;
    password: string;
    email: string;
  };
};

export default function Demo() {
  const { handleSubmit, control } = useForm<FormInputs>();

  const submitHandler: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <Stack maxW={'3xl'} p={'10'}>
          <Text fontSize="xl" as="b">
            TextAreaField
          </Text>
          <Controller
            name="exampleTextArea"
            control={control}
            rules={{ required: '답변을 작성해주세요!' }}
            render={({ field: { ref, ...restField }, fieldState }) => (
              <TextAreaField
                withTextLengthMessage
                placeholder="ex.개발자와 협업하기 위해 동아리에 들어감"
                maxLength={100}
                {...restField}
                {...fieldState}
              />
            )}
          />

          <Text fontSize="xl" as="b">
            TextField
          </Text>
          <Controller
            name="exampleText.default"
            control={control}
            rules={{ required: '답변을 작성해주세요!' }}
            render={({ field: { ref, ...restField }, fieldState }) => (
              <TextField placeholder="ex.UI/UX 디자이너" {...restField} {...fieldState} />
            )}
          />
          <Controller
            name="exampleText.naming"
            control={control}
            rules={{ required: '답변을 작성해주세요!' }}
            render={({ field: { ref, ...restField }, fieldState }) => (
              <TextField
                rightContent={<TextLengthMessage currentLength={restField.value?.length || 0} maxLength={5} />}
                placeholder="닉네임"
                {...restField}
                {...fieldState}
              />
            )}
          />
          <Controller
            name="exampleText.password"
            control={control}
            rules={{ required: '답변을 작성해주세요!' }}
            render={({ field: { ref, ...restField }, fieldState }) => (
              <TextField
                type="password"
                /** FIXME: 아이콘 컴포넌트 분리 필요 */
                rightContent={
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.0625 8.75H15.5625C15.45 8.75 15.375 8.675 15.375 8.5625C15.2625 5.3375 12.45 2.75 9 2.75C5.55 2.75 2.7375 5.3375 2.625 8.5625C2.625 8.675 2.55 8.75 2.4375 8.75H0.9375C0.825 8.75 0.75 8.675 0.75 8.5625C0.8625 4.2875 4.5 0.875 9 0.875C13.5 0.875 17.1375 4.2875 17.25 8.5625C17.25 8.675 17.175 8.75 17.0625 8.75Z"
                      fill="#2B2D36"
                    />
                    <path
                      d="M11.4 8.78748C11.625 9.27498 11.7 9.79998 11.5875 10.3625C11.4 11.4125 10.575 12.2375 9.56249 12.425C7.76249 12.8 6.18749 11.2625 6.41249 9.46248C6.56249 8.48748 7.23749 7.66248 8.17499 7.36248C8.66249 7.21248 9.11249 7.21248 9.56249 7.28748C9.67499 7.32498 9.74999 7.24998 9.78749 7.17498L10.2 5.74998C10.2375 5.63748 10.1625 5.52498 10.05 5.52498C9.41249 5.37498 8.69999 5.33748 7.94999 5.52498C6.14999 5.97498 4.72499 7.51248 4.53749 9.34998C4.19999 12.125 6.41249 14.4875 9.11249 14.4125C11.475 14.3375 13.4625 12.35 13.5 9.98748C13.5 9.23748 13.35 8.56248 13.05 7.92498C13.0125 7.81248 12.9 7.81248 12.7875 7.84998L11.475 8.56248C11.3625 8.59998 11.3625 8.71248 11.4 8.78748Z"
                      fill="#2B2D36"
                    />
                  </svg>
                }
                placeholder="비밀번호를 입력하세요."
                {...restField}
                {...fieldState}
              />
            )}
          />
          <Controller
            name="exampleText.email"
            control={control}
            rules={{ required: '답변을 작성해주세요!' }}
            render={({ field: { ref, ...restField }, fieldState }) => (
              <TextField rightContent={'@gmail.com'} placeholder="insightOut" {...restField} {...fieldState} />
            )}
          />
          <Button type="submit">버튼을 눌러보세요 👀</Button>
        </Stack>
      </form>
      <ReactHookFormDevTool control={control} placement="top-right" />
    </>
  );
}
