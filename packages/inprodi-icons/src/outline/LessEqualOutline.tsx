import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgLessEqualOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#LessEqualOutline_svg__a)">
        <path
          d="M11.24.236a.553.553 0 0 0-.3.08L2.467 5.288a.552.552 0 0 0-.015.944l8.471 5.34a.553.553 0 0 0 .59-.934L3.811 5.78 11.5 1.268A.552.552 0 0 0 11.24.236ZM2.748 13.131a.553.553 0 1 0 0 1.105h8.471a.553.553 0 1 0 0-1.105H2.748Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="LessEqualOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgLessEqualOutline);
