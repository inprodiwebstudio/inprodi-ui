import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBoldOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#BoldOutline_svg__a)">
        <path
          d="M2.765.174a1.29 1.29 0 0 0-1.29 1.496v11.003a1.29 1.29 0 0 0 1.29 1.5h5.526c2.325 0 4.237-1.912 4.237-4.236 0-1.446-.785-2.669-1.903-3.435.464-.659.798-1.416.798-2.276 0-2.223-1.83-4.052-4.053-4.052H2.765Zm1.29 2.579H7.37c.83 0 1.474.644 1.474 1.473 0 .83-.645 1.474-1.474 1.474H4.24a1.29 1.29 0 0 0-.184.012v-2.96Zm0 5.514a1.284 1.284 0 0 0 .184.012H8.29c.931 0 1.658.727 1.658 1.658 0 .93-.727 1.658-1.658 1.658H4.055V8.267Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="BoldOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgBoldOutline);
