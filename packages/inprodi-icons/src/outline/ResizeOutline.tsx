import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgResizeOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ResizeOutline_svg__a)">
        <path
          d="M6.866.174a.477.477 0 0 0-.33.14l-3.181 3.18a.477.477 0 1 0 .675.674l2.366-2.366V12.54L4.03 10.173a.479.479 0 0 0-.786.15.477.477 0 0 0 .111.524l3.14 3.14a.477.477 0 0 0 .759-.003l3.136-3.137a.477.477 0 1 0-.674-.674L7.35 12.539V1.802l2.366 2.366a.477.477 0 1 0 .675-.674L7.21.314a.477.477 0 0 0-.344-.14Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ResizeOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgResizeOutline);
