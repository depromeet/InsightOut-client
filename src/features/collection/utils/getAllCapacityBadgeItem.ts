import { Capacity } from '../types';

const getAllCapacityBadgeItem = (target: Capacity[]): Capacity => {
  return {
    id: 0,
    keyword: '전체',
    count: target.reduce((acc, { count }) => acc + count, 0),
  };
};

export default getAllCapacityBadgeItem;
