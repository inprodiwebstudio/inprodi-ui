import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDownloadOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#DownloadOutline_svg__a)">
        <path
          d="M6.99.236a.584.584 0 0 0-.573.591v8.31L5.079 7.798a.583.583 0 1 0-.825.825l2.334 2.332a.584.584 0 0 0 .824 0l2.334-2.332a.583.583 0 1 0-.825-.825L7.583 9.136V.827a.583.583 0 0 0-.592-.591ZM2.14 4.519A2.147 2.147 0 0 0 0 6.657v5.441c0 1.174.965 2.138 2.139 2.138h9.722A2.147 2.147 0 0 0 14 12.098v-5.44a2.147 2.147 0 0 0-2.139-2.139H9.528a.584.584 0 1 0 0 1.166h2.333c.544 0 .972.429.972.972v5.441a.963.963 0 0 1-.972.972H2.14a.963.963 0 0 1-.972-.972v-5.44c0-.544.428-.973.972-.973h2.333a.584.584 0 1 0 0-1.166H2.14Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="DownloadOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgDownloadOutline);
