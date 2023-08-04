import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgOutgoingCallColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#OutgoingCallColor_svg__a)">
        <path
          d="M.93.69s-.117 1.376.42 2.453c.536 1.078 2.013 3.294 2.595 2.923-.274-.364-.09-.773.116-.972.134-.13.762-.723 1.186-1.123a.712.712 0 0 0 .136-.86L3.88.37a.712.712 0 0 0-.836-.339L.93.69ZM13.164 12.925s-1.375.117-2.453-.42C9.634 11.97 7.417 10.492 7.79 9.91c.363.274.772.09.972-.116.129-.134.722-.762 1.123-1.186a.712.712 0 0 1 .86-.136l2.74 1.502a.712.712 0 0 1 .338.836l-.658 2.114Z"
          fill="#1A9BA1"
        />
        <path
          d="M5.744 8.11a21.186 21.186 0 0 0 7.42 4.814l-.393.68a.782.782 0 0 1-.96.343A21.21 21.21 0 0 1 4.634 9.22 21.202 21.202 0 0 1-.092 2.044a.781.781 0 0 1 .341-.96L.93.69a21.19 21.19 0 0 0 4.814 7.42Z"
          fill="#37C6D0"
        />
        <path
          d="M11.644.782v1.06H7.565a.342.342 0 0 0-.342.343v1.157c0 .19.153.342.342.342h4.079v1.06c0 .16.189.244.307.138l2.106-1.893a.303.303 0 0 0 0-.45L11.951.644a.184.184 0 0 0-.307.137Z"
          fill="url(#OutgoingCallColor_svg__b)"
        />
      </g>
      <defs>
        <linearGradient
          id="OutgoingCallColor_svg__b"
          x1={8.734}
          y1={1.045}
          x2={11.751}
          y2={4.154}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1FA3E5" />
          <stop offset={1} stopColor="#007AD9" />
        </linearGradient>
        <clipPath id="OutgoingCallColor_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgOutgoingCallColor);
