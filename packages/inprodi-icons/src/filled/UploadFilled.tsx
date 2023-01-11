import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUploadFilled(props: SVGProps<SVGSVGElement>) {
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
        opacity={0.35}
        d="M11.365 5.029a4.664 4.664 0 0 0-9 1.11 2.915 2.915 0 0 0 .552 5.778H10.5a3.499 3.499 0 0 0 .865-6.888Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M5.554 6.083a.304.304 0 0 1-.215-.517l1.35-1.363a.439.439 0 0 1 .623 0l1.35 1.363a.304.304 0 0 1-.217.517h-2.89Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M6.417 5.5v4.083a.584.584 0 0 0 1.166 0V5.5a.584.584 0 0 0-1.166 0Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgUploadFilled);
