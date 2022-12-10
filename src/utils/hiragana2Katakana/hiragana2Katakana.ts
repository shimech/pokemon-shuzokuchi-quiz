const hiraganaRegExp = /[ぁ-ん]/g;

export const hiragana2Katakana = (katakana: string) =>
  katakana.replace(hiraganaRegExp, (s) =>
    String.fromCharCode(s.charCodeAt(0) + 0x60),
  );
