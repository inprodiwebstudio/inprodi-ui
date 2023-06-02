import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPauseFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.35}
        d="M3.5 0a1.75 1.75 0 0 0-1.75 1.75v10.5a1.75 1.75 0 1 0 3.5 0V1.75A1.75 1.75 0 0 0 3.5 0Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M8.75 1.75v10.5h3.5V1.75h-3.5Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M10.5 3.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM10.5 14a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgPauseFilled);
