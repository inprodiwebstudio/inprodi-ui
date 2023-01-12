import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgStarFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#StarFilled_svg__a)">
        <path
          d="M7.003 0a.525.525 0 0 0-.473.29L4.727 3.898l-4.282.66a.525.525 0 0 0-.291.89l2.962 2.961-.66 4.287a.525.525 0 0 0 .762.546L7 11.267l3.782 1.974a.524.524 0 0 0 .762-.546l-.66-4.287 2.962-2.962a.525.525 0 0 0-.29-.89l-4.283-.659L7.47.291A.525.525 0 0 0 7.003 0Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="StarFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgStarFilled);
