import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCheckOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.486 2.176a.5.5 0 0 0-.344.15l-8.639 8.64L.86 7.322a.5.5 0 1 0-.706.707l3.996 3.996a.5.5 0 0 0 .707 0l8.992-8.992a.5.5 0 0 0-.363-.857Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCheckOutline);
