import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgRecordFilled(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#RecordFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path opacity={0.35} d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z" />
        <path d="M7 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      </g>
      <defs>
        <clipPath id="RecordFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgRecordFilled);
