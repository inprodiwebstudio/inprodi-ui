import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgInfoOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 .836c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95A5.942 5.942 0 0 1 7 13.786a5.942 5.942 0 0 1-5.95-5.95A5.942 5.942 0 0 1 7 1.886Zm0 2.45a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4ZM6.992 6.78a.525.525 0 0 0-.517.532v3.85a.525.525 0 1 0 1.05 0v-3.85a.525.525 0 0 0-.533-.532Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgInfoOutline);
