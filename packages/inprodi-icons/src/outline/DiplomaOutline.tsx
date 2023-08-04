import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDiplomaOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#DiplomaOutline_svg__a)">
        <path
          d="M2.683.174c-1.153 0-2.1.946-2.1 2.1v.525a.525.525 0 0 0 .525.525h.875v9.274c0 .864.712 1.575 1.575 1.575h3.325v-1.05H3.558a.517.517 0 0 1-.525-.525V3.324h6.475a.525.525 0 0 0 .525-.525v-.525c0-.586.464-1.05 1.05-1.05.586 0 1.05.464 1.05 1.05v10.324a.517.517 0 0 1-.525.525h-.525v1.05h.525c.864 0 1.575-.711 1.575-1.575V2.274c0-1.154-.946-2.1-2.1-2.1h-8.4Zm0 1.05h6.625c-.188.314-.325.66-.325 1.05h-7.35c0-.586.464-1.05 1.05-1.05Zm1.925 3.5a.525.525 0 1 0 0 1.05h5.95a.525.525 0 1 0 0-1.05h-5.95Zm0 1.75a.525.525 0 1 0 0 1.05h2.45a.525.525 0 1 0 0-1.05h-2.45Zm4.375 1.4a2.458 2.458 0 0 0-2.45 2.45c0 .827.417 1.56 1.05 2.005v1.32a.524.524 0 0 0 .786.455l.614-.351.615.351a.523.523 0 0 0 .524-.002.524.524 0 0 0 .261-.454V12.33a2.451 2.451 0 0 0 1.05-2.006 2.458 2.458 0 0 0-2.45-2.45Zm0 1.05c.78 0 1.4.62 1.4 1.4 0 .779-.62 1.4-1.4 1.4-.78 0-1.4-.621-1.4-1.4 0-.78.62-1.4 1.4-1.4Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="DiplomaOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgDiplomaOutline);
