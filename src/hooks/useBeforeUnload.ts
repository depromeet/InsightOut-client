import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

const useBeforUnload = () => {
  const router = useRouter();

  useEffect(() => {
    const beforeUnloadHandler = (e: BeforeUnloadEvent) => {
      e.preventDefault(); // 새로고침 시, 뒤로가기 시에 브라우저단에서 얼럿 노출
      e.returnValue = ''; // 크롬에서는 필수
    };
    window.onbeforeunload = beforeUnloadHandler;
    return () => {
      window.onbeforeunload = null;
    };
  }, [router]);
};

export default useBeforUnload;
