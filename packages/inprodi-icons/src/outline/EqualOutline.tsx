import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgEqualOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#EqualOutline_svg__a)">
        <path
          d="M.626 4.173a.617.617 0 1 0 0 1.234h12.748a.617.617 0 1 0 0-1.234H.626Zm0 4.935a.617.617 0 1 0 0 1.234h12.748a.616.616 0 1 0 0-1.234H.626Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="EqualOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgEqualOutline);
