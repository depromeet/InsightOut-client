import Button from '../Button/Button';

const Home = () => {
  return (
    <main className="bg-white">
      <section className="flex flex-col justify-center items-center pt-[230px] pb-[63px]">
        <h1 className="text-center text-[60px] font-bold leading-[80px] whitespace-pre-line mb-[26px]">
          {'자기소개서가 막막한 순간,\n그 시작을 함께하는\n인사이트 아웃'}
        </h1>
        <p className="text-center whitespace-pre-line mb-[52px]">
          {
            '인사이트 아웃을 통해 질문으로 나의 프로젝트를 정리하며 경험을 파헤치고\n나만의 경험 역량 카드로 만들어 자기소개서를 작성해보세요.'
          }
        </p>
        <Button variant="primary" size="XL">
          경험 분해 시작하기
        </Button>
      </section>
    </main>
  );
};

export default Home;
