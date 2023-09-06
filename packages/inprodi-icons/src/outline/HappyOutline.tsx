import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgHappyOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#HappyOutline_svg__a)">
        <path
          d="M7 .174c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95A5.942 5.942 0 0 1 7 13.124a5.942 5.942 0 0 1-5.95-5.95A5.942 5.942 0 0 1 7 1.224ZM4.9 4.549a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm4.2 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm-4.98 4.02a.525.525 0 0 0-.416.854A4.19 4.19 0 0 0 7 11.023a4.19 4.19 0 0 0 3.296-1.6.526.526 0 1 0-.825-.65A3.13 3.13 0 0 1 7 9.974a3.13 3.13 0 0 1-2.471-1.2.525.525 0 0 0-.408-.205Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="HappyOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgHappyOutline);
