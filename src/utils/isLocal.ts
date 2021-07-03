export const isLocal = (host: string): boolean => {
  const local = /localhost/;
  return local.test(host);
};
