export const isStaging = (host: string): boolean => {
  const stg = /shimech.github.io/;
  return stg.test(host);
};
