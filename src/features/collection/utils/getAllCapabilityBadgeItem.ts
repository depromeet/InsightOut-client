import { Capability } from '../types';

const getAllCapability = (target: Capability[]): Capability => {
  return {
    id: 0,
    keyword: '전체',
    count: target.reduce((acc, { count }) => acc + count, 0),
  };
};

export default getAllCapability;
