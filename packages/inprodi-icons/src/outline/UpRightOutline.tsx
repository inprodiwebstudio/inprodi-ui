import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUpRightOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#UpRightOutline_svg__a)">
        <path
          d="M7.622 0a.617.617 0 1 0 0 1.235h4.27L.19 12.937a.617.617 0 1 0 .873.873L12.765 2.107v4.271a.618.618 0 1 0 1.235 0V.618A.617.617 0 0 0 13.383 0H7.622Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="UpRightOutline_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgUpRightOutline);
