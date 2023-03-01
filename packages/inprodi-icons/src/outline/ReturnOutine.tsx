import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgReturnOutine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ReturnOutine_svg__a)">
        <path
          d="M6.006.236a6.131 6.131 0 0 0-3.914 1.406.513.513 0 1 0 .653.79 5.096 5.096 0 0 1 3.261-1.171 5.118 5.118 0 0 1 5.126 5.126 5.118 5.118 0 0 1-5.126 5.125h-.3l.816-.816a.513.513 0 1 0-.725-.725L4.15 11.618a.513.513 0 0 0 .003.816l1.644 1.644a.515.515 0 0 0 .845-.161.513.513 0 0 0-.12-.563l-.816-.817h.3c3.391 0 6.15-2.76 6.15-6.15 0-3.391-2.759-6.151-6.15-6.151Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ReturnOutine_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgReturnOutine);
