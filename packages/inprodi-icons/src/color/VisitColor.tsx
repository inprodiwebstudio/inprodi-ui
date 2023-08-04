import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgVisitColor(props: SVGProps<SVGSVGElement>) {
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
        d="M11.168 10.032a5.91 5.91 0 1 0-8.473 0c.006.006.01.013.015.02l.02.019.046.046 3.69 3.69a.657.657 0 0 0 .93 0l3.69-3.69.047-.046.019-.02.016-.02Z"
        fill="url(#VisitColor_svg__a)"
      />
      <path
        d="M6.931 9.035a3.12 3.12 0 1 0 0-6.239 3.12 3.12 0 0 0 0 6.239Z"
        fill="url(#VisitColor_svg__b)"
      />
      <path
        d="M6.931 8.542a2.627 2.627 0 1 0 0-5.253 2.627 2.627 0 0 0 0 5.253Z"
        fill="url(#VisitColor_svg__c)"
      />
      <path
        d="M6.931 7.615a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z"
        fill="url(#VisitColor_svg__d)"
      />
      <path
        d="M5.85 5.684a.695.695 0 1 0 0-1.391.695.695 0 0 0 0 1.39Z"
        fill="#fff"
      />
      <defs>
        <radialGradient
          id="VisitColor_svg__b"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(6.931 5.915) scale(3.11944)"
        >
          <stop offset={0.177} />
          <stop offset={1} stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="VisitColor_svg__d"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.462 3.935) scale(4.34951)"
        >
          <stop stopColor="#4B4B4B" />
          <stop offset={0.531} stopColor="#393939" />
          <stop offset={1} stopColor="#252525" />
        </radialGradient>
        <linearGradient
          id="VisitColor_svg__a"
          x1={2.751}
          y1={1.732}
          x2={11.111}
          y2={10.092}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D43A02" />
          <stop offset={1} stopColor="#B9360C" />
        </linearGradient>
        <linearGradient
          id="VisitColor_svg__c"
          x1={6.207}
          y1={4.553}
          x2={8.341}
          y2={8.567}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#32BDEF" />
          <stop offset={1} stopColor="#1EA2E4" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgVisitColor);
