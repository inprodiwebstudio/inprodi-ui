import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCrossFilled(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#CrossFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path
          opacity={0.35}
          d="M10.994.516 7 4.51 3.006.516a1.76 1.76 0 1 0-2.49 2.49L4.51 7 .516 10.994a1.76 1.76 0 1 0 2.49 2.49L13.484 3.006a1.76 1.76 0 1 0-2.49-2.49Z"
        />
        <path d="M13.484 13.484a1.76 1.76 0 0 0 0-2.49L9.49 7 7 9.49l3.994 3.994a1.76 1.76 0 0 0 2.49 0Z" />
      </g>
      <defs>
        <clipPath id="CrossFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgCrossFilled);
