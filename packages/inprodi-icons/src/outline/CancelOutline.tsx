import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCancelOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#CancelOutline_svg__a)">
        <path
          d="M7 .236c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05c1.456 0 2.77.54 3.803 1.405l-8.348 8.347C1.59 10.005 1.05 8.692 1.05 7.236A5.942 5.942 0 0 1 7 1.286Zm4.545 2.147c.865 1.033 1.405 2.347 1.405 3.803A5.942 5.942 0 0 1 7 13.186c-1.456 0-2.77-.54-3.802-1.405l8.347-8.348Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="CancelOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgCancelOutline);
