'use client';

import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import TextField from '@/components/Input/TextField/TextField';

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-4 p-10">
        <TextAreaField autoSize placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
        <TextAreaField value="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
        <TextAreaField maxLength={100} placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
        <TextAreaField disabled placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
        <TextAreaField error errorMessage="필수 입력사항입니다" />
      </div>
      <div className="flex flex-col gap-4 p-10">
        <TextField placeholder="abc@gmail.com" />
        <TextField disabled placeholder="abc@gmail.com" />
        <TextField value="인사이트아웃짱" placeholder="abc@gmail.com" />
        <TextField error errorMessage="필수 입력사항입니다" />
        <TextField mode="naming" maxLength={10} placeholder="abc@gmail.com" />
        <TextField mode="password" />
        <TextField mode="email" emailDomain="@gmail.com" />
        <TextField chipTitle="chipTitle" placeholder="abc@gmail.com" />
      </div>
    </>
  );
};

export default Page;
