import { useResult } from "./useResult";
import type { Result } from "@/types/Result";

export const useResultContextProvider = (initialValue: Result) => {
  const { result, ...setResult } = useResult(initialValue);

  return { result, setResult };
};
