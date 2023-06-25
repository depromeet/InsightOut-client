import highlightError from '@/shared/utils/replacePatternToComponent';

import ErrorWord from './ErrorWord';
import { useSpellErrors, useAnswer } from '../../store';

const SpellErrorPreview = () => {
  const answer = useAnswer();
  const spellErrors = useSpellErrors();

  const errorRegex = new RegExp(spellErrors.map(({ error }) => error).join('|'), 'g');

  return (
    <section className="w-[660px] h-[540px] b1 text-main">{highlightError(answer, errorRegex, ErrorWord)}</section>
  );
};

export default SpellErrorPreview;
