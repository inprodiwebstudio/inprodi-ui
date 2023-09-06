import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgAtSignOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#AtSignOutline_svg__a)">
        <path
          d="M7 .174c-3.86 0-7 3.14-7 7a7.008 7.008 0 0 0 9.46 6.555.524.524 0 1 0-.37-.983 5.934 5.934 0 0 1-2.09.378 5.942 5.942 0 0 1-5.95-5.95A5.942 5.942 0 0 1 7 1.224a5.942 5.942 0 0 1 5.95 5.95v.875c0 .876-.699 1.575-1.575 1.575A1.567 1.567 0 0 1 9.8 8.049v-3.85a.525.525 0 1 0-1.05 0v.373c-.553-.554-1.284-.898-2.1-.898-1.77 0-3.15 1.608-3.15 3.5 0 1.891 1.38 3.5 3.15 3.5 1.005 0 1.884-.52 2.456-1.314a2.63 2.63 0 0 0 2.269 1.314A2.633 2.633 0 0 0 14 8.049v-.875c0-3.86-3.14-7-7-7Zm-.35 4.55c1.125 0 2.1 1.06 2.1 2.45 0 1.389-.975 2.45-2.1 2.45s-2.1-1.061-2.1-2.45c0-1.39.975-2.45 2.1-2.45Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="AtSignOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgAtSignOutline);
