import ExperienceCard from './ExperienceCard';

// FIXME: 경험카드에서 사용하는걸로 변경
const formatDate = (startDate: string, endDate: string) => `${startDate} - ${endDate}`;

const ExperienceCardList = () => {
  // FIXME: GET /experience
  const demoResponse = [
    {
      id: 1,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      summaryKeywords: ['협업', '리더십'],
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
    {
      id: 2,
      title: 'IT동아리 멤버',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      summaryKeywords: ['협업', '리더십'],
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
    {
      id: 3,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      summaryKeywords: ['협업', '리더십'],
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
    {
      id: 4,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      summaryKeywords: ['협업', '리더십'],
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
    {
      id: 5,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      summaryKeywords: ['협업', '리더십'],
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
    {
      id: 6,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      summaryKeywords: ['협업', '리더십'],
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
    {
      id: 7,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      summaryKeywords: ['협업', '리더십'],
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
    {
      id: 8,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      summaryKeywords: ['협업', '리더십'],
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
    {
      id: 9,
      title: '일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      summaryKeywords: ['협업', '리더십'],
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
  ];
  return (
    <ul className="flex flex-col w-[370px] max-h-[843px] overflow-hidden gap-[16px] px-[29px] py-[16px] bg-gradient-to-b from-[#E9E8FF] to-[#F2F9FF]">
      {demoResponse.map(({ id, startDate, endDate, title, summaryKeywords }) => (
        <li key={id}>
          <ExperienceCard
            // FIXME: 선택한 경험 카드의 id
            selected={id === 1}
            date={formatDate(startDate, endDate)}
            title={title}
            summaryKeywords={summaryKeywords}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExperienceCardList;
