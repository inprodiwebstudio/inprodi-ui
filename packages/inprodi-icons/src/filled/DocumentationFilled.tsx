import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDocumentationFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M1 11.9V2.1C1 .94 1.94 0 3.1 0H8l4.2 4.2v7.7a2.1 2.1 0 0 1-2.1 2.1h-7A2.1 2.1 0 0 1 1 11.9Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M8 2.8V0l4.2 4.2H9.4A1.4 1.4 0 0 1 8 2.8ZM8.7 7.7H4.5a.7.7 0 1 1 0-1.4h4.2a.7.7 0 1 1 0 1.4ZM7.3 10.5H4.5a.7.7 0 1 1 0-1.4h2.8a.7.7 0 1 1 0 1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgDocumentationFilled);
