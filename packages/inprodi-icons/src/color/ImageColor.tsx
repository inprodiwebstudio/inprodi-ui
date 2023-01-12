import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgImageColor(props: SVGProps<SVGSVGElement>) {
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
        d="M13.222 0H.778A.778.778 0 0 0 0 .778v11.666c0 .43.348.778.778.778h12.444c.43 0 .778-.348.778-.778V.778A.778.778 0 0 0 13.222 0Z"
        fill="#50E6FF"
      />
      <path
        d="M10.136 6.636a1.167 1.167 0 0 0-1.627-.022l-3.842 3.64V14h8.555c.43 0 .778-.348.778-.778V10.5l-3.864-3.864Z"
        fill="url(#ImageColor_svg__a)"
      />
      <path
        d="M9.528 4.667a1.361 1.361 0 1 0 0-2.723 1.361 1.361 0 0 0 0 2.723Z"
        fill="#FFF8DE"
      />
      <path
        d="M.778 14h12.444a.776.776 0 0 0 .708-.459l-8.46-8.46a1.167 1.167 0 0 0-1.628-.022L0 8.699v4.523c0 .43.348.778.778.778Z"
        fill="url(#ImageColor_svg__b)"
      />
      <defs>
        <linearGradient
          id="ImageColor_svg__a"
          x1={4.667}
          y1={10.147}
          x2={14}
          y2={10.147}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3CCBF4" />
          <stop offset={1} stopColor="#1FA0E5" />
        </linearGradient>
        <linearGradient
          id="ImageColor_svg__b"
          x1={6.965}
          y1={4.739}
          x2={6.965}
          y2={14}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28AFEA" />
          <stop offset={1} stopColor="#0B88DA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgImageColor);
