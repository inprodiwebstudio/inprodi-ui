import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgHighPriorityOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#HighPriorityOutline_svg__a)">
        <path
          d="M6.943.236c-.48.004-.957.189-1.317.555L.534 5.967c-.72.732-.71 1.923.021 2.643l5.176 5.092c.732.72 1.924.71 2.643-.021l5.092-5.176h.001c.72-.732.71-1.924-.022-2.644L8.269.77A1.863 1.863 0 0 0 6.943.236Zm.008.994a.866.866 0 0 1 .616.253l5.176 5.092c.347.34.35.882.01 1.229l-5.092 5.175a.861.861 0 0 1-1.228.01L1.257 7.897a.861.861 0 0 1-.01-1.229l5.092-5.176a.866.866 0 0 1 .612-.262Zm.041 2.33a.5.5 0 0 0-.492.507V8.07a.5.5 0 1 0 1 0V4.067a.5.5 0 0 0-.508-.507ZM7 9.57a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="HighPriorityOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgHighPriorityOutline);
