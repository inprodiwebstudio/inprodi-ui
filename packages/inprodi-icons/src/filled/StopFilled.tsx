import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgStopFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#StopFilled_svg__a)">
        <path
          d="M2.139 0A2.148 2.148 0 0 0 0 2.139v9.722C0 13.036.965 14 2.139 14h9.722A2.148 2.148 0 0 0 14 11.861V2.14A2.148 2.148 0 0 0 11.861 0H2.14Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="StopFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgStopFilled);
