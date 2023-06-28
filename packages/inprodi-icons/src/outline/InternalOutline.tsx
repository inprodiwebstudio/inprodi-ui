import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgInternalOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#InternalOutline_svg__a)">
        <path
          d="M7.232 0a.525.525 0 0 0-.516.533l.006 7.477-1.203-1.202a.525.525 0 1 0-.742.742l2.1 2.099a.525.525 0 0 0 .741 0l2.099-2.1a.525.525 0 1 0-.742-.741L7.771 8.012 7.765.532A.525.525 0 0 0 7.232 0ZM4.977 4.08a.525.525 0 0 0-.256.074A5.25 5.25 0 0 0 2 8.753 5.255 5.255 0 0 0 7.247 14a5.255 5.255 0 0 0 5.247-5.247 5.25 5.25 0 0 0-2.72-4.6.525.525 0 1 0-.506.92 4.193 4.193 0 0 1 2.177 3.68 4.19 4.19 0 0 1-4.198 4.198A4.19 4.19 0 0 1 3.05 8.753c0-1.59.88-2.967 2.177-3.68a.525.525 0 0 0-.25-.994Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="InternalOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgInternalOutline);
