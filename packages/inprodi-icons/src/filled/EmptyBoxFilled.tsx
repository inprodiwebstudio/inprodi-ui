import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgEmptyBoxFilled(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#EmptyBoxFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path
          opacity={0.35}
          d="M14 9.333H0V3.89l1.21-2.555A2.333 2.333 0 0 1 3.317 0h7.363c.902 0 1.724.52 2.11 1.335L14 3.89v5.443Z"
        />
        <path d="M0 3.889v7.778A2.333 2.333 0 0 0 2.333 14h9.334A2.333 2.333 0 0 0 14 11.667V3.889H0ZM7.778 7H6.222a.778.778 0 0 1 0-1.556h1.556a.778.778 0 0 1 0 1.556Z" />
      </g>
      <defs>
        <clipPath id="EmptyBoxFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgEmptyBoxFilled);
