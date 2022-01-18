import { css } from "@emotion/react";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useStatusChart } from "./useStatusChart";
import type { Status } from "@/types/Status";

const FULL_MARK = 150;

type StatusChartProps = {
  className?: string;
  name: string;
} & Status;

export const StatusChart: React.VoidFunctionComponent<StatusChartProps> = (
  props,
) => {
  const { isDesktop, theme } = useStatusChart();
  const data = [
    {
      status: `HP: ${props.hitpoint}`,
      value: props.hitpoint,
      fullMark: FULL_MARK,
    },
    {
      status: `こうげき: ${props.attack}`,
      value: props.attack,
      fullMark: FULL_MARK,
    },
    {
      status: `ぼうぎょ: ${props.block}`,
      value: props.block,
      fullMark: FULL_MARK,
    },
    {
      status: `すばやさ: ${props.speed}`,
      value: props.speed,
      fullMark: FULL_MARK,
    },
    {
      status: `とくこう: ${props.contact}`,
      value: props.contact,
      fullMark: FULL_MARK,
    },
    {
      status: `とくぼう: ${props.defense}`,
      value: props.defense,
      fullMark: FULL_MARK,
    },
  ];

  return (
    <div
      className={props.className}
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        * {
          font-family: Otomanopee One, sans-serif;
        }
      `}
    >
      <p
        css={[
          css`
            font-size: 3vw;
          `,
          !isDesktop &&
            css`
              font-size: 2rem;
            `,
        ]}
      >
        {props.total}
      </p>
      <div
        css={[
          css`
            align-items: flex-start;
            display: flex;
            flex-grow: 1;
            height: calc(50vw - 56px);
            justify-content: center;
            width: 100%;
            * {
              font-size: 1.2vw;
            }
          `,
          !isDesktop &&
            css`
              height: calc(100vw - 48px);
              * {
                font-size: 1rem;
              }
            `,
        ]}
      >
        <ResponsiveContainer
          height={isDesktop ? "80%" : "100%"}
          width={isDesktop ? "80%" : "100%"}
        >
          <RadarChart data={data} outerRadius="70%">
            <PolarGrid />
            <PolarAngleAxis dataKey="status" />
            <PolarRadiusAxis angle={90} domain={[0, FULL_MARK]} tickCount={4} />
            <Radar
              dataKey="value"
              fill={theme.colors.black}
              fillOpacity={0.8}
              name={props.name}
              stroke={theme.colors.black}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
