import { useRouter } from "next/router";
import React from "react";
import { useUrl } from "./useUrl";
import { SetResultContext } from "@/contexts/ResultContextProvider";
import { sleep } from "@/utils/sleep";

const SLEEP_MS = 50;

export const useNextPageLink = (
  dependencies: boolean[],
  onClick?: VoidFunction,
) => {
  const [disabled, setDisabled] = React.useState(false);
  const [isRedirectable, setRedirectable] = React.useState(false);
  const { url, isValidUrl } = useUrl();
  const setResult = React.useContext(SetResultContext);
  const router = useRouter();

  React.useEffect(() => {
    if (isRedirectable && dependencies.every((dependency) => dependency)) {
      sleep(SLEEP_MS);
      router.push(url);
    }
  }, [isRedirectable, ...dependencies]);

  // TODO: ダブルクリック防止の実装が微妙。
  // パスが変わったらリンクを有効にする、というロジックで暫定実装している。
  React.useEffect(() => {
    setDisabled(false);
  }, [router.query]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setDisabled(true);
    setResult.increment("quizCount");
    if (onClick) {
      onClick();
    }
    setRedirectable(true);
  };

  return { disabled, url, isValidUrl, handleClick };
};
