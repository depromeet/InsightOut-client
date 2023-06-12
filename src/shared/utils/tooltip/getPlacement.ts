/* eslint-disable unused-imports/no-unused-vars */

const getPlacement = (placement: TooltipPosition, offset: number, rect?: DOMRect) => {
  if (!rect) return;

  const placements: { [key in TooltipPosition]: TooltipPlacement } = {
    'center-top': {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, -100%)',
    },
    'left-top': {
      top: `${rect.top - offset}px`,
      left: `${rect.left}px`,
      transform: 'translate(0, -100%)',
    },
    'right-top': {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width}px`,
      transform: 'translate(-100%, -100%)',
    },
    'center-bottom': {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, 0)',
    },
    'left-bottom': {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left}px`,
      transform: 'translate(0, 0)',
    },
    'right-bottom': {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left + rect.width}px`,
      transform: 'translate(-100%, 0)',
    },
    'side-left-center': {
      top: `${rect.top + rect.height / 2}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-100%, -50%)',
    },
    'side-right-center': {
      top: `${rect.top + rect.height / 2}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(0, -50%)',
    },
  };

  return placements[placement];
};

export default getPlacement;
