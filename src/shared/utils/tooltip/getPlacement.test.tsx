import getPlacement from './getPlacement';
import { OFFSET } from '@/shared/constants/tooltip';

describe('getPlacement', () => {
  const rect = {
    top: 150,
    bottom: 500,
    left: 200,
    right: 360,
    width: 120,
    height: 200,
  } as DOMRect;

  it('center-top placement가 올바르게 계산되어야 합니다.', () => {
    const placement = getPlacement('center-top', OFFSET, rect);
    expect(placement).toEqual({
      top: '133px',
      left: '260px',
      transform: 'translate(-50%, -100%)',
    });
  });

  it('left-top 위치 placement가 올바르게 계산되어야 합니다.', () => {
    const placement = getPlacement('left-top', OFFSET, rect);
    expect(placement).toEqual({
      top: '133px',
      left: '200px',
      transform: 'translate(0, -100%)',
    });
  });

  it('right-top 위치 placement가 올바르게 계산되어야 합니다.', () => {
    const placement = getPlacement('right-top', OFFSET, rect);
    expect(placement).toEqual({
      top: '133px',
      left: '320px',
      transform: 'translate(-100%, -100%)',
    });
  });

  it('center-bottom 위치 placement가 올바르게 계산되어야 합니다.', () => {
    const placement = getPlacement('center-bottom', OFFSET, rect);
    expect(placement).toEqual({
      top: '517px',
      left: '260px',
      transform: 'translate(-50%, 0)',
    });
  });

  it('left-bottom 위치 placement가 올바르게 계산되어야 합니다.', () => {
    const placement = getPlacement('left-bottom', OFFSET, rect);
    expect(placement).toEqual({
      top: '517px',
      left: '200px',
      transform: 'translate(0, 0)',
    });
  });

  it('right-bottom 위치 placement가 올바르게 계산되어야 합니다.', () => {
    const placement = getPlacement('right-bottom', OFFSET, rect);
    expect(placement).toEqual({
      top: '517px',
      left: '320px',
      transform: 'translate(-100%, 0)',
    });
  });

  it('side-left-center 위치 placement가 올바르게 계산되어야 합니다.', () => {
    const placement = getPlacement('side-left-center', OFFSET, rect);
    expect(placement).toEqual({
      top: '250px',
      left: '183px',
      transform: 'translate(-100%, -50%)',
    });
  });

  it('side-right-center 위치 placement가 올바르게 계산되어야 합니다.', () => {
    const placement = getPlacement('side-right-center', OFFSET, rect);
    expect(placement).toEqual({
      top: '250px',
      left: '377px',
      transform: 'translate(0, -50%)',
    });
  });

  it('rect가 주어지지 않으면 undefined를 반환해야 합니다.', () => {
    const placement = getPlacement('center-top', OFFSET);
    expect(placement).toBeUndefined();
  });
});
