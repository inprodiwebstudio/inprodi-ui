import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgLockFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5 14H3.1A2.1 2.1 0 0 1 1 11.9V6.3c0-1.16.94-2.1 2.1-2.1h8.4c1.16 0 2.1.94 2.1 2.1v5.6a2.1 2.1 0 0 1-2.1 2.1Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M4.5 4.2a2.8 2.8 0 0 1 5.6 0h1.4a4.2 4.2 0 1 0-8.4 0h1.4ZM7.3 7.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgLockFilled);
