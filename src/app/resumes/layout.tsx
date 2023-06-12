import { PropsWithChildren } from 'react';

import LeftNavigationBar from '@/feature/resume/components/LeftNavigationBar/LeftNavigationBar';

const Layout = ({ children }: PropsWithChildren) => {
  /** TODO: fetch('/resumes') */
  const demoResponse = [
    {
      id: 1234,
      title: '디프만 13기',
      createdAt: '2023-06-05T05:58:44.402Z',
      updatedAt: '2023-06-05T05:58:44.402Z',
      questions: [
        {
          id: 1234,
          title: '디프만 13기 지원동기',
          answer: '디프만을 통한 빠른 성장',
          updatedAt: '2023-06-05T05:58:44.402Z',
        },
      ],
    },
  ];

  return (
    <div className="flex h-full bg-gray-50">
      <LeftNavigationBar resumeList={demoResponse} />
      <div className="mx-[10px] mt-[19px]">{children}</div>
      <div className="mx-[10px] mt-[19px]">
        <section className="flex flex-col min-w-[699px] border-[1px] border-primary-100 shadow-toast rounded-3xl bg-white">
          {/* 경험 카드 리스트 */}
        </section>
      </div>
    </div>
  );
};

export default Layout;
