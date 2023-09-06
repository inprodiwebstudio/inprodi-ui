import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUnderlineOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#UnderlineOutline_svg__a)">
        <path
          d="M2.287.174a.538.538 0 0 0-.53.545v6.1A5.21 5.21 0 0 0 6.96 12.02a5.21 5.21 0 0 0 5.202-5.202v-6.1a.538.538 0 1 0-1.076 0v6.1a4.118 4.118 0 0 1-4.126 4.125A4.118 4.118 0 0 1 2.834 6.82v-6.1a.538.538 0 0 0-.547-.545Zm.009 12.923a.538.538 0 1 0 0 1.077h9.687a.538.538 0 1 0 0-1.077H2.296Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="UnderlineOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgUnderlineOutline);
