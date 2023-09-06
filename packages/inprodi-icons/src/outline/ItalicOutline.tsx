import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgItalicOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ItalicOutline_svg__a)">
        <path
          d="M9.53.174a.617.617 0 0 0-.07.007H5.03a.617.617 0 1 0 0 1.234h3.624L4.197 12.932H.917a.616.616 0 1 0 0 1.234h3.6c.065.01.132.01.197 0h4.84a.618.618 0 1 0 0-1.234H5.52L9.977 1.415h2.868a.617.617 0 1 0 0-1.234H9.657A.617.617 0 0 0 9.53.174Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ItalicOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgItalicOutline);
