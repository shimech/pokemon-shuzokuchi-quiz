import { useRouter } from "next/router";
import React from "react";
import { useUrl } from "./useUrl";
import { SetResultContext } from "@/contexts/ResultContextProvider";

export const useNextPageLink = (onClick?: VoidFunction) => {
  const [disabled, setDisabled] = React.useState(false);
  const { url, isValidUrl } = useUrl();
  const setResult = React.useContext(SetResultContext);
  const router = useRouter();

  // TODO: ダブルクリック防止の実装が微妙。
  // パスが変わったらリンクを有効にする、というロジックで暫定実装している。
  React.useEffect(() => {
    setDisabled(false);
  }, [router.query]);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setDisabled(true);
    setResult.increment("quizCount");
    if (onClick) {
      onClick();
    }
    router.push(url);
  };

  return { disabled, url, isValidUrl, handleClick };
};
