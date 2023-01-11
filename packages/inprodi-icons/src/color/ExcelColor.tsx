import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgExcelColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14 3.55H8.4V6.7H14V3.55Z" fill="#21A366" />
      <path
        d="M14 6.7H2.8v5.6a.7.7 0 0 0 .7.7h9.8a.7.7 0 0 0 .7-.7V6.7Z"
        fill="#185C37"
      />
      <path d="M14 6.7H8.4v3.15H14V6.7Z" fill="#107C42" />
      <path d="M8.4 3.55H2.8V6.7h5.6V3.55Z" fill="#3FA071" />
      <path d="M13.3.4H8.4v3.15H14V1.1a.7.7 0 0 0-.7-.7Z" fill="#33C481" />
      <path d="M3.5.4h4.9v3.15H2.8V1.1a.7.7 0 0 1 .7-.7Z" fill="#21A366" />
      <path
        opacity={0.05}
        d="M6.412 2.85H2.8v8.4h3.612c.711 0 1.288-.577 1.288-1.288V4.138c0-.711-.577-1.288-1.288-1.288Z"
        fill="#000"
      />
      <path
        opacity={0.07}
        d="M6.375 10.9H2.8V2.967h3.575c.603 0 1.092.488 1.092 1.092v5.749c0 .603-.49 1.092-1.092 1.092Z"
        fill="#000"
      />
      <path
        opacity={0.09}
        d="M6.337 10.55H2.8V3.083h3.537c.495 0 .896.402.896.896v5.675a.896.896 0 0 1-.896.896Z"
        fill="#000"
      />
      <path
        d="M6.3 10.2H.7a.7.7 0 0 1-.7-.7V3.9a.7.7 0 0 1 .7-.7h5.6a.7.7 0 0 1 .7.7v5.6a.7.7 0 0 1-.7.7Z"
        fill="url(#ExcelColor_svg__a)"
      />
      <path
        d="M2.032 4.95h.836l.677 1.314.716-1.314h.78L3.967 6.7l1.099 1.75h-.823l-.738-1.375-.736 1.375h-.835l1.118-1.756-1.02-1.744Z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="ExcelColor_svg__a"
          x1={0.254}
          y1={3.454}
          x2={6.669}
          y2={9.869}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18884F" />
          <stop offset={1} stopColor="#0B6731" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgExcelColor);
