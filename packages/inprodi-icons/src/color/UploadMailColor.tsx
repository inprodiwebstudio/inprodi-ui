import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUploadMailColor(props: SVGProps<SVGSVGElement>) {
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
        d="m1.87 6.633 11.225-4.461v8.203a.623.623 0 0 1-.623.623H1.87V6.633Z"
        fill="url(#UploadMailColor_svg__a)"
      />
      <path
        d="M0 2.172v8.203c0 .344.28.623.624.623h11.848a.617.617 0 0 0 .4-.149L0 2.172Z"
        fill="url(#UploadMailColor_svg__b)"
      />
      <path
        opacity={0.05}
        d="M0 1.956h13.095v.528l-5.4 4.193a1.871 1.871 0 0 1-2.295 0L0 2.484v-.528Z"
        fill="#000"
      />
      <path
        opacity={0.07}
        d="M0 1.8h13.095v.528L7.472 6.416c-.549.407-1.3.407-1.85 0L0 2.328V1.8Z"
        fill="#000"
      />
      <path
        d="M.624 1.02h11.848c.344 0 .623.28.623.624v.528L7.25 6.155c-.424.289-.981.289-1.404 0L0 2.172v-.528c0-.344.28-.623.624-.623Z"
        fill="#50E6FF"
      />
      <path
        opacity={0.05}
        d="m13.095 7.946-1.012-1.013a.81.81 0 0 0-.578-.238.81.81 0 0 0-.576.238L8.866 8.997a.561.561 0 0 0 .397.962h1.1V11h2.109a.597.597 0 0 0 .177-.03V9.96h.446V7.946Z"
        fill="#000"
      />
      <path
        opacity={0.07}
        d="m13.095 8.167-1.123-1.124a.656.656 0 0 0-.933 0L8.976 9.107a.406.406 0 0 0 .288.696h1.255v1.195h1.953l.021-.002V9.803h.602V8.167Z"
        fill="#000"
      />
      <path
        d="M9.264 9.647h1.41v2.806c0 .23.187.416.416.416h.832c.23 0 .415-.186.415-.416V9.647h1.41a.252.252 0 0 0 .179-.43l-2.064-2.063a.504.504 0 0 0-.712 0L9.086 9.217a.252.252 0 0 0 .178.43Z"
        fill="url(#UploadMailColor_svg__c)"
      />
      <defs>
        <linearGradient
          id="UploadMailColor_svg__a"
          x1={5.773}
          y1={4.026}
          x2={13.28}
          y2={15.261}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28AFEA" />
          <stop offset={1} stopColor="#0B88DA" />
        </linearGradient>
        <linearGradient
          id="UploadMailColor_svg__b"
          x1={-0.496}
          y1={6.137}
          x2={10.392}
          y2={12.92}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28AFEA" />
          <stop offset={1} stopColor="#0B88DA" />
        </linearGradient>
        <linearGradient
          id="UploadMailColor_svg__c"
          x1={11.506}
          y1={7.018}
          x2={11.506}
          y2={12.91}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C965EB" />
          <stop offset={1} stopColor="#C767E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgUploadMailColor);
