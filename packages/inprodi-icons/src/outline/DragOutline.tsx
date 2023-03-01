import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDragOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M11.2 9.832a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0Zm-5.6 0a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0Zm-5.6 0a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0ZM11.2 4.698a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0Zm-5.6 0a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0Zm-5.6 0a1.4 1.4 0 1 0 2.8 0 1.4 1.4 0 0 0-2.8 0Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgDragOutline);
