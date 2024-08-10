import React from "react";
import { cn } from "../lib/utils.tsx";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "relative overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] bg-transparant",
        {
          "flex flex-row": !vertical,
          "flex flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "pause-on-hover": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {React.Children.map(children, (child) =>
              React.cloneElement(child as React.ReactElement<any>, {
                className: cn(
                  (child as React.ReactElement<any>).props.className,
                  "marquee-item",
                ),
              }),
            )}
          </div>
        ))}
    </div>
  );
}
