export const isProduction = (host: string): boolean => {
  const prd = /pokemon-shuzokuchi-quiz.firebaseapp.com/;
  return prd.test(host);
};
