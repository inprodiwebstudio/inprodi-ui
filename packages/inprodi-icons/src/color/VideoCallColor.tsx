import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgVideoCallColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#VideoCallColor_svg__a)">
        <path
          d="m13.55 3.463-3.368 1.88v1.59H14V3.753l-.45-.29Z"
          fill="#0E6F38"
        />
        <path
          d="M9.545 11.388H.636A.636.636 0 0 1 0 10.752V3.116c0-.352.285-.637.636-.637h8.91c.351 0 .636.285.636.637v7.636a.636.636 0 0 1-.637.636Z"
          fill="url(#VideoCallColor_svg__b)"
        />
        <path
          d="M13.682 4.07a.318.318 0 1 0 0-.636.318.318 0 0 0 0 .636ZM13.55 10.405l-3.368-1.88V6.934H14v3.182l-.45.289Z"
          fill="#0E6F38"
        />
        <path
          d="M13.682 10.434a.318.318 0 1 0 0-.637.318.318 0 0 0 0 .637Z"
          fill="#0E6F38"
        />
      </g>
      <defs>
        <linearGradient
          id="VideoCallColor_svg__b"
          x1={4.532}
          y1={2.784}
          x2={5.716}
          y2={11.577}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21AD64" />
          <stop offset={1} stopColor="#149753" />
        </linearGradient>
        <clipPath id="VideoCallColor_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgVideoCallColor);
