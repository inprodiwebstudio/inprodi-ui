import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgVolumeFilled(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#VolumeFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path d="M10.549 11.064a.777.777 0 0 1-.26-1.51A2.722 2.722 0 0 0 12.105 7a2.72 2.72 0 0 0-1.816-2.553.778.778 0 1 1 .52-1.466A4.278 4.278 0 0 1 13.66 7a4.28 4.28 0 0 1-2.85 4.019.78.78 0 0 1-.261.045Z" />
        <path d="M8.993 5.444v3.111a1.556 1.556 0 0 0 0-3.111Z" />
        <path
          opacity={0.35}
          d="M7.953.086a1.56 1.56 0 0 0-1.73.497L3.579 3.888h-.808A2.336 2.336 0 0 0 .438 6.222v1.555a2.336 2.336 0 0 0 2.333 2.334h.808l2.644 3.305a1.555 1.555 0 0 0 2.77-.972V1.555c0-.661-.416-1.25-1.04-1.469Z"
        />
      </g>
      <defs>
        <clipPath id="VolumeFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgVolumeFilled);
