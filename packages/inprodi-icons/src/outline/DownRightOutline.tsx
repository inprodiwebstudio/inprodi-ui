import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgDownRightOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#DownRightOutline_svg__a)">
        <path
          d="M.492 1.778A.5.5 0 0 0 0 2.285v5c0 1.007.827 1.833 1.833 1.833h10.46l-2.48 2.48a.501.501 0 1 0 .707.707l3.334-3.333a.5.5 0 0 0 0-.707L10.52 4.93a.5.5 0 1 0-.707.707l2.48 2.48H1.833A.826.826 0 0 1 1 7.285v-5a.5.5 0 0 0-.508-.507Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="DownRightOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgDownRightOutline);
