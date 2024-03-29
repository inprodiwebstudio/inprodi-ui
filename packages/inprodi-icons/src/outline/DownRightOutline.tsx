import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDownRightOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#DownRightOutline_svg__a)">
        <path
          d="M.617 0a.617.617 0 0 0-.43 1.06l11.7 11.7h-4.27a.616.616 0 1 0 0 1.234H13.3a.618.618 0 0 0 .695-.696v-5.68a.616.616 0 1 0-1.234 0v4.27L1.06.187A.617.617 0 0 0 .617 0Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="DownRightOutline_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgDownRightOutline);
