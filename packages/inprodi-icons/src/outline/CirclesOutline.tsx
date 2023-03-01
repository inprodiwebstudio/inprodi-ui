import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCirclesOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7 .836c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm0 1.05a5.942 5.942 0 0 1 5.95 5.95A5.942 5.942 0 0 1 7 13.786a5.942 5.942 0 0 1-5.95-5.95A5.942 5.942 0 0 1 7 1.886Zm0 2.8a3.158 3.158 0 0 0-3.15 3.15A3.158 3.158 0 0 0 7 10.986a3.158 3.158 0 0 0 3.15-3.15A3.158 3.158 0 0 0 7 4.686Zm0 1.05c1.166 0 2.1.934 2.1 2.1s-.934 2.1-2.1 2.1-2.1-.934-2.1-2.1.934-2.1 2.1-2.1Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCirclesOutline);
