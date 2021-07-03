export const isStaging = (host: string): boolean => {
  const stg = /^https?:\/{2,}shimech.github.io/;
  return stg.test(host);
};
