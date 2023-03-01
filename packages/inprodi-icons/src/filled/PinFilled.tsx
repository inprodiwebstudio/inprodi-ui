import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPinFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#PinFilled_svg__a)">
        <path
          d="M5.148 0a1.64 1.64 0 0 0-1.196.484L.485 3.951a1.64 1.64 0 0 0-.47 1.389c.07.515.368.957.82 1.215l3.718 2.126 1.396 3.49a.552.552 0 0 0 .904.186l2.361-2.362 3.835 3.835a.554.554 0 0 0 .951-.388.555.555 0 0 0-.17-.393L9.995 9.214l2.362-2.362a.554.554 0 0 0-.185-.903L8.68 4.552 6.556.834A1.643 1.643 0 0 0 5.148 0Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="PinFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgPinFilled);
