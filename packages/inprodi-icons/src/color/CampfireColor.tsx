import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCampfireColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.856.42A.342.342 0 0 1 6.19 0c.08 0 .136.03.158.039.418.163 3.286 1.515 2.622 5.424.963-.58.619-1.707.934-1.707.118 0 .167.044.24.148 1.053 1.503 1.85 3.297 1.85 4.974A5.122 5.122 0 0 1 6.873 14c-3.11 0-5.122-2.62-5.122-5.122 0-4.161 4.904-4.93 4.106-8.458Z"
        fill="url(#CampfireColor_svg__a)"
      />
      <path
        d="M6.74 5.012s-.087-.074-.213-.074a.345.345 0 0 0-.345.345c.345 2.068-2.068 2.758-2.068 5.171a2.758 2.758 0 0 0 5.516 0c0-1.965-1.731-4.588-2.89-5.442Z"
        fill="url(#CampfireColor_svg__b)"
      />
      <defs>
        <linearGradient
          id="CampfireColor_svg__a"
          x1={5.278}
          y1={0.086}
          x2={7.776}
          y2={13.798}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F44F5A" />
          <stop offset={0.443} stopColor="#EE3D4A" />
          <stop offset={1} stopColor="#E52030" />
        </linearGradient>
        <linearGradient
          id="CampfireColor_svg__b"
          x1={5.745}
          y1={4.257}
          x2={7.86}
          y2={15.802}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FED100" />
          <stop offset={1} stopColor="#E36001" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgCampfireColor);
