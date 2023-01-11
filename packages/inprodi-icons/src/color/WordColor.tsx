import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgWordColor(props: SVGProps<SVGSVGElement>) {
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
        d="M13.3 1H3.5a.7.7 0 0 0-.7.7v2.451H14V1.7a.7.7 0 0 0-.7-.7Z"
        fill="url(#WordColor_svg__a)"
      />
      <path
        d="M2.8 10.469V12.9a.7.7 0 0 0 .7.7h9.8a.7.7 0 0 0 .7-.7v-2.431H2.8Z"
        fill="url(#WordColor_svg__b)"
      />
      <path d="M2.8 4.151H14v3.15H2.8v-3.15Z" fill="url(#WordColor_svg__c)" />
      <path d="M2.8 7.302H14v3.167H2.8V7.302Z" fill="url(#WordColor_svg__d)" />
      <path
        opacity={0.05}
        d="M6.412 3.45H2.8v8.4h3.612c.711 0 1.288-.577 1.288-1.288V4.738c0-.711-.577-1.288-1.288-1.288Z"
        fill="#000"
      />
      <path
        opacity={0.07}
        d="M6.375 11.5H2.8V3.567h3.575c.603 0 1.092.488 1.092 1.092v5.749c0 .603-.49 1.092-1.092 1.092Z"
        fill="#000"
      />
      <path
        opacity={0.09}
        d="M6.337 11.15H2.8V3.683h3.537c.495 0 .896.402.896.896v5.675a.896.896 0 0 1-.896.896Z"
        fill="#000"
      />
      <path
        d="M6.3 10.8H.7a.7.7 0 0 1-.7-.7V4.5a.7.7 0 0 1 .7-.7h5.6a.7.7 0 0 1 .7.7v5.6a.7.7 0 0 1-.7.7Z"
        fill="url(#WordColor_svg__e)"
      />
      <path
        d="M5.041 5.55 4.5 8.092 3.9 5.55h-.765l-.618 2.621-.558-2.621h-.685l.82 3.5h.824l.6-2.691.6 2.691h.787l.82-3.5h-.684Z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="WordColor_svg__a"
          x1={8.4}
          y1={4.138}
          x2={8.4}
          y2={1.157}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#42A3F2" />
          <stop offset={1} stopColor="#42A4EB" />
        </linearGradient>
        <linearGradient
          id="WordColor_svg__b"
          x1={8.4}
          y1={13.6}
          x2={8.4}
          y2={10.469}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11408A" />
          <stop offset={1} stopColor="#103F8F" />
        </linearGradient>
        <linearGradient
          id="WordColor_svg__c"
          x1={8.4}
          y1={-6.511}
          x2={8.4}
          y2={-6.532}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3079D6" />
          <stop offset={1} stopColor="#297CD2" />
        </linearGradient>
        <linearGradient
          id="WordColor_svg__d"
          x1={2.8}
          y1={8.886}
          x2={14}
          y2={8.886}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1D59B3" />
          <stop offset={1} stopColor="#195BBC" />
        </linearGradient>
        <linearGradient
          id="WordColor_svg__e"
          x1={0.26}
          y1={4.06}
          x2={6.823}
          y2={10.623}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#256AC2" />
          <stop offset={1} stopColor="#1247AD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgWordColor);
