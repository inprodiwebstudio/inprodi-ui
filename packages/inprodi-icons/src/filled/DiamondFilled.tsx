import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDiamondFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#DiamondFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path
          opacity={0.35}
          d="M14 7c0 .434-.168.868-.497 1.197l-5.306 5.306a1.691 1.691 0 0 1-2.394 0L.497 8.197a1.691 1.691 0 0 1 0-2.394L5.803.497a1.691 1.691 0 0 1 2.394 0l5.306 5.306c.329.329.497.763.497 1.197Z"
        />
        <path d="M4.193 7H0c0 .434.168.868.497 1.197l5.306 5.306c.329.329.763.497 1.197.497L4.375 7.952A2.642 2.642 0 0 1 4.193 7ZM13.503 5.803 8.197.497A1.691 1.691 0 0 0 7 0L4.375 6.048c-.119.308-.182.63-.182.952H14c0-.434-.168-.868-.497-1.197Z" />
      </g>
      <defs>
        <clipPath id="DiamondFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgDiamondFilled);
