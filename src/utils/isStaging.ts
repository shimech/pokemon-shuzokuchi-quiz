export const isStaging = (host: string): boolean => {
  const stg = /pokemon-shuzokuchi-quiz-stg.firebaseapp.com/;
  return stg.test(host);
};
