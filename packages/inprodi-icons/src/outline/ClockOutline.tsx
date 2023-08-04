import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgClockOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ClockOutline_svg__a)">
        <path
          d="M7 .174c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95A5.942 5.942 0 0 1 7 13.124a5.942 5.942 0 0 1-5.95-5.95A5.942 5.942 0 0 1 7 1.224Zm-.533 1.742a.525.525 0 0 0-.517.533v3.85c0 .139.055.272.154.37l1.75 1.75a.525.525 0 1 0 .742-.742L7 7.131V3.5a.525.525 0 0 0-.533-.533Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ClockOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgClockOutline);
