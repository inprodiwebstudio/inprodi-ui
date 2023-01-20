import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgIdCardFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9 12.6H2.1A2.1 2.1 0 0 1 0 10.5v-7c0-1.16.94-2.1 2.1-2.1h9.8c1.16 0 2.1.94 2.1 2.1v7a2.1 2.1 0 0 1-2.1 2.1Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M4.2 7a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM5.95 9.8h-3.5a1.05 1.05 0 0 1 0-2.1h3.5a1.05 1.05 0 0 1 0 2.1ZM11.9 4.9H9.1a.7.7 0 0 1 0-1.4h2.8a.7.7 0 0 1 0 1.4ZM11.9 7.7H9.1a.7.7 0 0 1 0-1.4h2.8a.7.7 0 0 1 0 1.4ZM11.9 10.5H9.1a.7.7 0 0 1 0-1.4h2.8a.7.7 0 0 1 0 1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgIdCardFilled);
