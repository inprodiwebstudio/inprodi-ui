import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgFileFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M1.458 11.9V2.1c0-1.16.94-2.1 2.1-2.1h4.9l4.2 4.2v7.7a2.1 2.1 0 0 1-2.1 2.1h-7a2.1 2.1 0 0 1-2.1-2.1Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M8.458 2.8V0l4.2 4.2h-2.8a1.4 1.4 0 0 1-1.4-1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgFileFilled);
