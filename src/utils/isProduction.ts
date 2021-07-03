export const isProduction = (host: string): boolean => {
  const prd = /^https?:\/{2,}pokemon-shuzokuchi-quiz.firebaseapp.com/;
  return prd.test(host);
};
