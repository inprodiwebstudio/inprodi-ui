import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMoreEqualOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#MoreEqualOutline_svg__a)">
        <path
          d="M2.71.237a.552.552 0 0 0-.242 1.032l7.688 4.512-7.703 4.857a.554.554 0 1 0 .59.935l8.47-5.34a.552.552 0 0 0-.014-.944L3.028.316a.552.552 0 0 0-.318-.08Zm.038 12.894a.551.551 0 1 0 0 1.105h8.47a.553.553 0 1 0 0-1.105h-8.47Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="MoreEqualOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgMoreEqualOutline);
