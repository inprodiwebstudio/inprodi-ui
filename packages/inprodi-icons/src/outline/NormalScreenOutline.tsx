import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgNormalScreenOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#NormalScreenOutline_svg__a)">
        <path
          d="M4.466.236a.583.583 0 0 0-.573.59v2.331a.962.962 0 0 1-.972.971H.591a.583.583 0 1 0 0 1.166h2.33a2.145 2.145 0 0 0 2.137-2.137V.827a.583.583 0 0 0-.592-.591Zm5.05 0a.583.583 0 0 0-.574.59v2.331c0 1.173.963 2.137 2.136 2.137h2.33a.583.583 0 1 0 0-1.165h-2.33a.963.963 0 0 1-.97-.972V.827a.582.582 0 0 0-.592-.591ZM.59 9.178a.583.583 0 1 0 0 1.165h2.33c.544 0 .972.428.972.971v2.33a.583.583 0 1 0 1.165 0v-2.33A2.145 2.145 0 0 0 2.92 9.178H.591Zm10.487 0a2.145 2.145 0 0 0-2.136 2.136v2.33a.583.583 0 1 0 1.165 0v-2.33c0-.543.428-.97.971-.97h2.33a.583.583 0 1 0 0-1.166h-2.33Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="NormalScreenOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgNormalScreenOutline);
