import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgNoUserFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#NoUserFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path d="M7.636 10.827c0 .452.096.885.261 1.274H1.91A1.907 1.907 0 0 1 0 10.19C0 9.132.853 8.28 1.91 8.28h7a3.191 3.191 0 0 0-1.274 2.547ZM9.236 11.499l2.25-2.252a.635.635 0 1 1 .9.9l-2.25 2.252a.635.635 0 1 1-.9-.9Z" />
        <path d="m10.135 9.248 2.25 2.252a.637.637 0 0 1-.9.9l-2.25-2.252a.636.636 0 1 1 .9-.9Z" />
        <g opacity={0.35}>
          <path d="M5.727 6.369A3.183 3.183 0 0 0 8.91 3.184 3.183 3.183 0 0 0 5.727 0a3.183 3.183 0 0 0-3.182 3.184A3.183 3.183 0 0 0 5.727 6.37ZM10.818 14A3.183 3.183 0 0 0 14 10.816a3.183 3.183 0 0 0-3.182-3.185 3.183 3.183 0 0 0-3.182 3.185A3.183 3.183 0 0 0 10.818 14Z" />
        </g>
      </g>
      <defs>
        <clipPath id="NoUserFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgNoUserFilled);
