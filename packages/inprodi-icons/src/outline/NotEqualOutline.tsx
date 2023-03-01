import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgNotEqualOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#NotEqualOutline_svg__a)">
        <path
          d="M.524.236a.525.525 0 0 0-.365.9l3.3 3.301H1.58a.524.524 0 1 0 0 1.05h2.93l3.147 3.146H1.579a.524.524 0 1 0 0 1.05h7.126l4.392 4.392a.525.525 0 1 0 .742-.742L.9.395a.525.525 0 0 0-.377-.16Zm5.89 4.201 1.05 1.05h4.955a.524.524 0 1 0 0-1.05H6.415Zm4.197 4.196 1.049 1.05h.759a.524.524 0 1 0 0-1.05H10.61Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="NotEqualOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgNotEqualOutline);
