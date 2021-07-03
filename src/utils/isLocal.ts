export const isLocal = (host: string): boolean => {
  const local = /^https?:\/{2,}localhost/;
  return local.test(host);
};
