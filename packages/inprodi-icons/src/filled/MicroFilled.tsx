import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMicroFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7 9.1a2.8 2.8 0 0 1-2.8-2.8V2.8a2.8 2.8 0 0 1 5.6 0v3.5A2.8 2.8 0 0 1 7 9.1Z"
        fill={props.color || `currentColor`}
      />
      <path
        opacity={0.35}
        d="M11.94 7.711c-.468-.133-.98.065-1.201.498a4.196 4.196 0 0 1-7.477 0c-.221-.433-.733-.631-1.201-.498a1.052 1.052 0 0 0-.645 1.495A6.297 6.297 0 0 0 5.6 12.429v.171a1.4 1.4 0 1 0 2.8 0v-.171a6.297 6.297 0 0 0 4.185-3.223 1.053 1.053 0 0 0-.646-1.495Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgMicroFilled);
