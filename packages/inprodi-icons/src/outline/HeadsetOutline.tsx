import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgHeadsetOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#HeadsetOutline_svg__a)">
        <path
          d="M7.253.18a5.676 5.676 0 0 0-5.94 5.66v3.834c0 .957.755 1.73 1.694 1.805.077 1.307 1.146 2.361 2.472 2.361h.338a.83.83 0 0 0 .662.334h1a.834.834 0 0 0 0-1.667h-1a.83.83 0 0 0-.662.333H5.48c-.775 0-1.381-.582-1.467-1.333h.8a.5.5 0 0 0 .5-.5V7.34a.5.5 0 0 0-.5-.5h-2.5v-1A4.658 4.658 0 0 1 7.206 1.18c2.505.117 4.44 2.281 4.44 4.807v.854h-2.5a.5.5 0 0 0-.5.5v3.667a.5.5 0 0 0 .5.5h1.668a1.841 1.841 0 0 0 1.833-1.833V5.986c0-3.038-2.34-5.662-5.393-5.806Zm-4.94 7.66h2v2.667H3.146a.826.826 0 0 1-.833-.833V7.84Zm7.333 0h2v1.834a.826.826 0 0 1-.833.833H9.646V7.84Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="HeadsetOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgHeadsetOutline);
