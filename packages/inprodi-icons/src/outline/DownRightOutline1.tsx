import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDownRightOutline1(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#DownRightOutline-1_svg__a)">
        <path
          d="M.617.174a.617.617 0 0 0-.43 1.06l11.7 11.7h-4.27a.618.618 0 1 0 0 1.234H13.3a.616.616 0 0 0 .695-.696V7.791a.616.616 0 1 0-1.234 0v4.27L1.06.361A.617.617 0 0 0 .617.174Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="DownRightOutline-1_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgDownRightOutline1);
