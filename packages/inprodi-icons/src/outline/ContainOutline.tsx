import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgContainOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ContainOutline_svg__a)">
        <path
          d="M7 .236c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95A5.942 5.942 0 0 1 7 13.186a5.942 5.942 0 0 1-5.95-5.95A5.942 5.942 0 0 1 7 1.286Zm0 2.8a3.158 3.158 0 0 0-3.15 3.15A3.158 3.158 0 0 0 7 10.386a3.158 3.158 0 0 0 3.15-3.15A3.158 3.158 0 0 0 7 4.086Zm0 1.05c1.166 0 2.1.934 2.1 2.1s-.934 2.1-2.1 2.1-2.1-.934-2.1-2.1.934-2.1 2.1-2.1Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ContainOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgContainOutline);
