import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPaperFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M1.4 11.9V2.1C1.4.94 2.34 0 3.5 0h7c1.16 0 2.1.94 2.1 2.1v9.8a2.1 2.1 0 0 1-2.1 2.1h-7a2.1 2.1 0 0 1-2.1-2.1Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M9.1 7.7H4.9a.7.7 0 1 1 0-1.4h4.2a.7.7 0 1 1 0 1.4ZM7.7 10.5H4.9a.7.7 0 1 1 0-1.4h2.8a.7.7 0 1 1 0 1.4ZM7.7 4.9H4.9a.7.7 0 1 1 0-1.4h2.8a.7.7 0 1 1 0 1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgPaperFilled);
