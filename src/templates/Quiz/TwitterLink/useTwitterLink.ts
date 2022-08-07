import { useDesktop } from "@/hooks/useDesktop";
import type { Status } from "@/types/Status";

export const useTwitterLink = (status: Status) => {
  const isDesktop = useDesktop();
  const title =
    [
      "【ポケモン種族値クイズ！】",
      "このポケモンだ〜れだ？",
      [
        `H${status.hitpoint}`,
        `A${status.attack}`,
        `B${status.block}`,
        `C${status.contact}`,
        `D${status.defense}`,
        `S${status.speed}`,
      ].join(" "),
    ].join("\n") + "\n";

  return { isDesktop, title };
};
