interface ModalHeaderProps {
  title: string;
  subTitle?: string;
}

const ModalHeader = ({ title, subTitle }: ModalHeaderProps) => (
  <>
    <h2 className="text-2xl font-bold">{title}</h2>
    {subTitle ? <p className="text-[1rem] font-normal">{subTitle}</p> : ''}
  </>
);

export default ModalHeader;
