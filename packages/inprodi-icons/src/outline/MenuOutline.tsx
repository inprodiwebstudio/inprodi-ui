import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMenuOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7.4 11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm0-5.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm0-5.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgMenuOutline);
