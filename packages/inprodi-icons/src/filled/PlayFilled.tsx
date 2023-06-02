import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPlayFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.908 5.544 4.033.294A1.747 1.747 0 0 0 2.236.207a1.75 1.75 0 0 0-.924 1.543v10.5a1.75 1.75 0 0 0 2.722 1.456l7.875-5.25a1.75 1.75 0 0 0-.001-2.912Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgPlayFilled);
