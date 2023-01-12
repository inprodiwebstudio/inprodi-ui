import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgFileColor(props: SVGProps<SVGSVGElement>) {
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
        d="M12.053 4.053v9.21c0 .407-.33.737-.737.737h-9.58A.737.737 0 0 1 1 13.263V.737C1 .33 1.33 0 1.737 0H8l4.053 4.053Z"
        fill="#50E6FF"
      />
      <path
        d="M8 0v3.316c0 .407.33.737.737.737h3.316L8 0Z"
        fill="url(#FileColor_svg__a)"
      />
      <defs>
        <linearGradient
          id="FileColor_svg__a"
          x1={8.195}
          y1={3.858}
          x2={10.063}
          y2={1.989}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3079D6" />
          <stop offset={1} stopColor="#297CD2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgFileColor);
