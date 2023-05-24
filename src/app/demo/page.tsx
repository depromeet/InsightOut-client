import List from '@/components/demo/List';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import Modal from '@/components/Modal/Modal';
import ModalHeader from '@/components/Modal/ModalHeader';
import ModalFooterWithAdditionalButton from '@/components/Modal/ModalFooterWithAdditionalButton';

const Page = () => {
  return (
    <div>
      <Modal
        openButtonContent="모달 열기"
        header={<ModalHeader title="타이틀" subTitle="서브타이틀" />}
        closeButtonContent="닫기"
        additionalFooter={<ModalFooterWithAdditionalButton content="추가 버튼" />}>
        <div>
          <p>모달 테스트</p>
        </div>
      </Modal>
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration
        queryKey={['demo']}
        queryFn={() => fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())}>
        <List />
      </PrefetchHydration>
    </div>
  );
};

export default Page;
