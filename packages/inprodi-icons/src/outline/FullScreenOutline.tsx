import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgFullScreenOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#FullScreenOutline_svg__a)">
        <path
          d="M2.139.236A2.148 2.148 0 0 0 0 2.375v2.333a.583.583 0 1 0 1.167 0V2.375c0-.544.428-.972.972-.972h2.333a.583.583 0 1 0 0-1.167H2.14Zm7.389 0a.583.583 0 1 0 0 1.167h2.333c.544 0 .972.428.972.972v2.333a.584.584 0 1 0 1.167 0V2.375A2.148 2.148 0 0 0 11.86.235H9.528ZM.574 9.172A.583.583 0 0 0 0 9.764v2.333c0 1.174.965 2.139 2.139 2.139h2.333a.584.584 0 1 0 0-1.167H2.14a.964.964 0 0 1-.972-.972V9.764a.583.583 0 0 0-.593-.592Zm12.834 0a.583.583 0 0 0-.575.592v2.333a.964.964 0 0 1-.972.972H9.528a.584.584 0 1 0 0 1.167h2.333A2.148 2.148 0 0 0 14 12.096V9.765a.582.582 0 0 0-.592-.592Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="FullScreenOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgFullScreenOutline);
