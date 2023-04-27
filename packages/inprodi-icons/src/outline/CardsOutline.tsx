import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCardsOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.833 2.07A1.841 1.841 0 0 0 0 3.902v5c0 1.006.827 1.833 1.833 1.833H10.5a1.841 1.841 0 0 0 1.833-1.833v-5A1.84 1.84 0 0 0 10.5 2.069H1.833Zm0 1H10.5c.466 0 .833.367.833.833v.5H1v-.5c0-.466.367-.834.833-.834ZM13 3.745v5.157a2.5 2.5 0 0 1-2.5 2.5H2.01c.386.6 1.06 1 1.823 1H10.5c1.93 0 3.5-1.57 3.5-3.5V5.569c0-.763-.4-1.437-1-1.823ZM1 5.403h10.333v3.5a.826.826 0 0 1-.833.833H1.833A.826.826 0 0 1 1 8.903v-3.5Zm7.167 2.333a.5.5 0 1 0 0 1h1.666a.5.5 0 1 0 0-1H8.167Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCardsOutline);
