import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMuteMicroFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#MuteMicroFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path d="M7 9.1a2.8 2.8 0 0 1-2.8-2.8V2.8a2.8 2.8 0 0 1 5.6 0v3.5A2.8 2.8 0 0 1 7 9.1Z" />
        <path
          opacity={0.35}
          d="M11.94 7.711c-.468-.133-.98.065-1.201.498a4.196 4.196 0 0 1-7.477 0c-.221-.433-.733-.631-1.201-.498a1.052 1.052 0 0 0-.645 1.495A6.297 6.297 0 0 0 5.6 12.429v.171a1.4 1.4 0 1 0 2.8 0v-.171a6.297 6.297 0 0 0 4.185-3.223 1.053 1.053 0 0 0-.646-1.495Z"
        />
        <path d="M13.3 14a.698.698 0 0 1-.495-.205l-12.6-12.6a.7.7 0 1 1 .99-.99l12.6 12.6A.7.7 0 0 1 13.3 14Z" />
      </g>
      <defs>
        <clipPath id="MuteMicroFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgMuteMicroFilled);
