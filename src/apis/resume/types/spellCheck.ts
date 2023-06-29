export type SpellCheckParams = {
  post: { payload: { sentence: string } };
};

export type SpellCheckResponse = {
  type: string;
  token: string;
  suggestions: string[];
  context: string;
}[][];
