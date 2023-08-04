import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDownloadMailColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#DownloadMailColor_svg__a)">
        <path
          d="m1.87 6.341 11.225-4.46v8.202a.623.623 0 0 1-.623.624H1.87V6.34Z"
          fill="url(#DownloadMailColor_svg__b)"
        />
        <path
          d="M0 1.88v8.203c0 .345.28.624.624.624h11.848a.617.617 0 0 0 .4-.15L0 1.88Z"
          fill="url(#DownloadMailColor_svg__c)"
        />
        <path
          opacity={0.05}
          d="M0 1.665h13.095v.527l-5.4 4.194a1.871 1.871 0 0 1-2.295 0L0 2.192v-.527Z"
          fill="#000"
        />
        <path
          opacity={0.07}
          d="M0 1.509h13.095v.527L7.472 6.124c-.549.407-1.3.407-1.85 0L0 2.036V1.51Z"
          fill="#000"
        />
        <path
          d="M.624.73h11.848c.344 0 .623.278.623.623v.527L7.25 5.863c-.424.289-.981.289-1.404 0L0 1.88v-.527C0 1.008.28.729.624.729Z"
          fill="#50E6FF"
        />
        <path
          opacity={0.05}
          d="M12.472 10.707c.04 0 .078-.005.116-.012.025-.005.049-.013.072-.02l.033-.01a.626.626 0 0 0 .09-.044l.003-.002a.627.627 0 0 0 .287-.371h-.424V7.754a.728.728 0 0 0-.727-.728h-.832a.728.728 0 0 0-.727.728v2.494h-1.1a.562.562 0 0 0-.52.349c-.015.035-.02.072-.028.11h3.757Z"
          fill="#000"
        />
        <path
          opacity={0.07}
          d="M12.472 10.707c.04 0 .079-.005.116-.012.025-.005.049-.013.072-.02l.033-.01a.626.626 0 0 0 .31-.261h-.51v-2.65a.572.572 0 0 0-.571-.572h-.832a.572.572 0 0 0-.571.572v2.65H9.264a.407.407 0 0 0-.377.252c-.007.016-.008.033-.012.05h3.597Z"
          fill="#000"
        />
        <path
          d="M9.264 10.56h1.41V7.754c0-.23.186-.416.416-.416h.831c.23 0 .416.186.416.416v2.806h1.41c.225 0 .337.272.178.43l-2.063 2.064a.504.504 0 0 1-.713 0L9.086 10.99a.252.252 0 0 1 .178-.43Z"
          fill="url(#DownloadMailColor_svg__d)"
        />
      </g>
      <defs>
        <linearGradient
          id="DownloadMailColor_svg__b"
          x1={5.773}
          y1={3.734}
          x2={13.28}
          y2={14.97}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28AFEA" />
          <stop offset={1} stopColor="#0B88DA" />
        </linearGradient>
        <linearGradient
          id="DownloadMailColor_svg__c"
          x1={-0.496}
          y1={5.846}
          x2={10.392}
          y2={12.629}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28AFEA" />
          <stop offset={1} stopColor="#0B88DA" />
        </linearGradient>
        <linearGradient
          id="DownloadMailColor_svg__d"
          x1={11.506}
          y1={13.189}
          x2={11.506}
          y2={7.297}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C965EB" />
          <stop offset={1} stopColor="#C767E5" />
        </linearGradient>
        <clipPath id="DownloadMailColor_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgDownloadMailColor);
