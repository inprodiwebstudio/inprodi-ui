import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPulseOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#PulseOutline_svg__a)">
        <path
          d="M7.846.875a.5.5 0 0 0-.503.401l-1.28 6.397-.752-2.446a.5.5 0 0 0-.937-.05l-.87 2.03H1.5a.833.833 0 1 0 0 1h2.333a.5.5 0 0 0 .46-.302l.464-1.08.932 3.03a.5.5 0 0 0 .968-.049l1.1-5.506 1.248 8.48a.5.5 0 0 0 .98.049l1.239-4.955h1.277a.833.833 0 1 0 0-1h-1.668a.5.5 0 0 0-.485.38l-.72 2.883-1.3-8.835a.5.5 0 0 0-.482-.427Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="PulseOutline_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgPulseOutline);
