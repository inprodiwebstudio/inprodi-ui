import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgLightOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#LightOutline_svg__a)">
        <path
          d="M7.058.174a5.608 5.608 0 0 0-5.6 5.6c0 1.699.76 2.867 1.5 3.706.74.84 1.383 1.435 1.466 1.827.178.835.365 1.639.365 1.639v-.006a1.58 1.58 0 0 0 1.537 1.234H7.79A1.58 1.58 0 0 0 9.33 12.94c0-.005.186-.801.363-1.634.083-.392.727-.988 1.466-1.827.74-.84 1.5-2.007 1.5-3.706 0-3.087-2.513-5.6-5.6-5.6Zm0 1.05c2.52 0 4.55 2.03 4.55 4.55 0 1.398-.572 2.257-1.237 3.012-.565.641-1.247 1.15-1.569 1.888H5.314c-.322-.738-1.003-1.247-1.568-1.888-.666-.755-1.238-1.614-1.238-3.012 0-2.52 2.031-4.55 4.55-4.55Zm-1.465 10.5h2.93l-.218.983-.001.003v.003a.52.52 0 0 1-.513.41H6.325a.52.52 0 0 1-.512-.41v-.003l-.002-.003-.218-.983Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="LightOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgLightOutline);
