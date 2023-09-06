import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgArchiveFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M1.458 11.9V2.1c0-1.16.94-2.1 2.1-2.1h7c1.16 0 2.1.94 2.1 2.1v9.8a2.1 2.1 0 0 1-2.1 2.1h-7a2.1 2.1 0 0 1-2.1-2.1Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M7.758 7.7h-1.4a.7.7 0 0 1-.7-.7v-.7a.7.7 0 0 1 .7-.7h1.4a.7.7 0 0 1 .7.7V7a.7.7 0 0 1-.7.7Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M7.758 6.3h-1.4s-1.4 2.587-1.4 3.5a2.1 2.1 0 1 0 4.2 0c0-.913-1.4-3.5-1.4-3.5Zm-.7 4.2a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4ZM7.058 2.8a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4ZM6.358.7a.7.7 0 0 0 1.4 0V0h-1.4v.7Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgArchiveFilled);
