import highlightError from '@/shared/utils/replacePatternToComponent';

import { useAnswer, useSpellErrors } from '../../store';
import ErrorWord from './ErrorWord';

const SpellErrorPreview = () => {
  const answer = useAnswer();
  const spellErrors = useSpellErrors();

  const errorRegex = new RegExp(spellErrors.map(({ error }) => error).join('|'), 'g');

  return (
    <section className="w-[612px] h-[660px] overflow-y-scroll mb-[32px] b1 text-main">
      {highlightError(answer, errorRegex, ErrorWord)}
    </section>
  );
};

export default SpellErrorPreview;
