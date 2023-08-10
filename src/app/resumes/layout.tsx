import { PropsWithChildren, ReactNode } from 'react';

type LayoutProps = PropsWithChildren & {
  aside: ReactNode;
  myExperienceCard: ReactNode;
};

const Layout = ({ children, aside, myExperienceCard }: LayoutProps) => {
  return (
    <div className="flex h-full max-[1536px]:h-max bg-gray-50 pt-[56px]">
      {aside}
      <div className="flex mt-[19px] gap-[20px] px-[10px] max-[1536px]:flex-col max-[1536px]:pl-[101px] ">
        {children}
        {myExperienceCard}
      </div>
    </div>
  );
};

export default Layout;
