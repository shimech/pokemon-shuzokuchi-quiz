import { useRouter } from "next/router";
import React from "react";
import { SetResultContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useHintButton = () => {
  const [open, setOpen] = React.useState(false);
  const setResultContext = React.useContext(SetResultContext);
  const isDesktop = useDesktop();
  const router = useRouter();

  React.useEffect(() => {
    setOpen(false);
  }, [router.query?.id]);

  const handleHintButtonClick = () => {
    setOpen(true);
    setResultContext.increment("hintCount");
  };

  return { open, handleHintButtonClick, isDesktop };
};
