import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgLessOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#LessOutline_svg__a)">
        <path
          d="M10.146.236a.552.552 0 0 0-.378.173L3.51 6.85a.552.552 0 0 0 0 .77l6.258 6.442a.552.552 0 1 0 .793-.77L4.676 7.236l5.885-6.058a.553.553 0 0 0-.415-.942Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="LessOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgLessOutline);
