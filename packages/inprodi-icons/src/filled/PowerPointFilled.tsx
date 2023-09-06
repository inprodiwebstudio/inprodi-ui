import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPowerPointFilled(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#PowerPointFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path opacity={0.35} d="M13.3 2.82H7v8.4h6.3v-8.4Z" />
        <path
          opacity={0.35}
          d="M6.323.875a.697.697 0 0 0-.16.013l-5.6 1.121A.699.699 0 0 0 0 2.695v8.652a.7.7 0 0 0 .564.686l5.6 1.121A.7.7 0 0 0 7 12.466V1.576a.7.7 0 0 0-.677-.7Z"
        />
        <path d="M5.039 4.71c-.37-.326-.868-.49-1.496-.49h-1.45a.7.7 0 0 0-.7.7v4.372a.529.529 0 0 0 1.057 0V7.744h1.08c.652 0 1.159-.153 1.52-.459.362-.306.542-.733.542-1.282 0-.536-.184-.968-.553-1.294Zm-.812 1.903c-.173.149-.422.223-.749.223H2.8a.35.35 0 0 1-.35-.35V5.402a.35.35 0 0 1 .35-.35h.704c.305.004.545.09.718.255.175.165.262.386.262.662 0 .28-.085.496-.257.644ZM13.3 2.12H7v9.8h6.3a.7.7 0 0 0 .7-.7v-8.4a.7.7 0 0 0-.7-.7Zm-1.4 7.7H8.4v-1.4h3.5v1.4Zm-1.75-2.8a1.75 1.75 0 1 1 0-3.5v1.75h1.75a1.75 1.75 0 0 1-1.75 1.75Z" />
      </g>
      <defs>
        <clipPath id="PowerPointFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgPowerPointFilled);
