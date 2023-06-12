import React from 'react';
import { render } from '@testing-library/react';
import wrapTooltipChildren from '../tooltip/wrapTooltipChildren';

describe('wrapTooltipChildren', () => {
  it('children의 길이가 15보다 클 경우 <br /> 로 감싸져야 합니다.', () => {
    const children = '일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오';
    const wrappedChildren = wrapTooltipChildren(children);
    const { container } = render(<>{wrappedChildren}</>);
    const brTags = container.querySelectorAll('br');

    expect(brTags.length).toBeGreaterThan(0);
  });

  it('children의 길이가 15보다 작을 경우 <br /> 로 감싸지면 안됩니다.', () => {
    const children = '일이삼사오육칠팔구십일이삼사';
    const wrappedChildren = wrapTooltipChildren(children);
    const { container } = render(<>{wrappedChildren}</>);
    const brTags = container.querySelectorAll('br');

    expect(brTags.length).toBe(0);
  });

  it('children의 길이가 15보다 작을 경우 기존의 children이 반환되어야 합니다.', () => {
    const children = '일이삼사오육칠팔구십일이삼사';
    const wrappedChildren = wrapTooltipChildren(children);

    expect(wrappedChildren).toEqual(children);
  });
});
