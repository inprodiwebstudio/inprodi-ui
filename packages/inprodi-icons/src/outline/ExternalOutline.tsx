import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgExternalOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ExternalOutline_svg__a)">
        <path
          d="M7.242 0a.525.525 0 0 0-.363.154l-2.1 2.1a.525.525 0 1 0 .742.742l1.203-1.203-.006 7.131a.525.525 0 1 0 1.05.002l.006-7.134L8.98 2.996a.525.525 0 1 0 .742-.742l-2.1-2.1A.525.525 0 0 0 7.242 0ZM4.978 4.074a.525.525 0 0 0-.256.074A5.253 5.253 0 0 0 2 8.75 5.258 5.258 0 0 0 7.25 14a5.258 5.258 0 0 0 5.25-5.25 5.253 5.253 0 0 0-2.722-4.602.525.525 0 1 0-.506.92A4.195 4.195 0 0 1 11.45 8.75c0 2.326-1.874 4.2-4.2 4.2a4.192 4.192 0 0 1-4.2-4.2c0-1.59.88-2.968 2.178-3.682a.525.525 0 0 0-.25-.994Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ExternalOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgExternalOutline);
