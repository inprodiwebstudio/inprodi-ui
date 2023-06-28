import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMasterCardColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 10.667c0 .736-.597 1.333-1.333 1.333H1.333A1.333 1.333 0 0 1 0 10.667V3.333C0 2.597.597 2 1.333 2h11.334C13.403 2 14 2.597 14 3.333v7.334Z"
        fill="#3F51B5"
      />
      <path
        d="M9 3.827a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Z"
        fill="#FFC107"
      />
      <path
        d="M6.338 9.16a3.327 3.327 0 0 1-.392-.667h1.775a3.3 3.3 0 0 0 .212-.666H5.734a3.325 3.325 0 0 1-.067-.667H8a3.35 3.35 0 0 0-.067-.667h-2.2c.048-.232.12-.454.213-.666h1.775a3.312 3.312 0 0 0-.392-.667h-.991c.146-.193.31-.374.494-.532a3.333 3.333 0 1 0-2.165 5.865c1.09 0 2.054-.525 2.662-1.333h-.991Z"
        fill="#FF3D00"
      />
    </svg>
  );
}
export default IconHoc(SvgMasterCardColor);
