import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMoreOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#MoreOutline_svg__a)">
        <path
          d="M3.636.236a.583.583 0 0 0-.39 1.007L9.42 7.236l-6.174 5.993a.583.583 0 1 0 .812.836l6.605-6.41a.584.584 0 0 0 0-.837L4.058.407a.583.583 0 0 0-.422-.171Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="MoreOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgMoreOutline);
