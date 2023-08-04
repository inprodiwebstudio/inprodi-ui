import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgOverviewOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#OverviewOutline_svg__a)">
        <path
          d="M3.033.174c-.863 0-1.575.71-1.575 1.575v10.85c0 .863.712 1.575 1.575 1.575h8.05c.864 0 1.575-.712 1.575-1.575V1.749c0-.864-.711-1.575-1.575-1.575h-8.05Zm0 1.05h8.05c.297 0 .525.228.525.525v10.85a.517.517 0 0 1-.525.525h-8.05a.517.517 0 0 1-.525-.525V1.749c0-.297.23-.525.525-.525Zm1.4 1.4a.525.525 0 1 0 0 1.05h5.25a.525.525 0 1 0 0-1.05h-5.25Zm0 3.15a.525.525 0 1 0 0 1.05h3.15a.525.525 0 1 0 0-1.05h-3.15Zm5.25 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm-5.25 2.1a.525.525 0 1 0 0 1.05h2.1a.525.525 0 1 0 0-1.05h-2.1Zm5.25 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Zm-5.25 2.1a.524.524 0 1 0 0 1.05h3.15a.526.526 0 1 0 0-1.05h-3.15Zm5.25 0a.525.525 0 1 0 0 1.05.525.525 0 0 0 0-1.05Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="OverviewOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgOverviewOutline);
