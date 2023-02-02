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
          d="M6.943.174c-.48.003-.957.189-1.317.555L.534 5.905c-.72.731-.71 1.923.021 2.643l5.176 5.092c.732.72 1.924.71 2.643-.022l5.092-5.175h.001c.72-.733.71-1.924-.022-2.644L8.269.707A1.863 1.863 0 0 0 6.943.174Zm.008.994a.866.866 0 0 1 .616.252l5.176 5.092c.347.341.35.883.01 1.23l-5.092 5.175a.861.861 0 0 1-1.228.01L1.257 7.835a.861.861 0 0 1-.01-1.229L6.339 1.43a.866.866 0 0 1 .612-.262Zm.041 2.33a.5.5 0 0 0-.492.507v4.002a.5.5 0 1 0 1 0V4.005a.5.5 0 0 0-.508-.507ZM7 9.508a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.334Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="HighPriorityOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgHighPriorityOutline);
