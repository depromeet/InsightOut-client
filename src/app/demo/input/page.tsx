import { Input } from '@/components/Input/Input';

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-4 p-10">
        <Input.TextField placeholder="abc@gmail.com" />
        <Input.TextField disabled placeholder="abc@gmail.com" />
        <Input>
          <Input.TextField placeholder="abc@gmail.com" />
          <Input.RightContent>
            <Input.TextLengthMessage currentLength={0} maxLength={100} />
          </Input.RightContent>
        </Input>
        <Input>
          <Input.TextField placeholder="abc@gmail.com" />
          <Input.RightContent>@gmail.com</Input.RightContent>
        </Input>
      </div>

      <div className="flex flex-col gap-4 p-10">
        <Input.TextareaField placeholder="abc@gmail.com" />
        <Input.TextareaField disabled placeholder="abc@gmail.com" />
        <Input.TextareaField error placeholder="abc@gmail.com" />
        <Input.ErrorMessage>필수 입력사항입니다.</Input.ErrorMessage>

        <Input.TextareaField />
        <Input.TextLengthMessage currentLength={0} maxLength={100} />
      </div>
    </>
  );
};

export default Page;
