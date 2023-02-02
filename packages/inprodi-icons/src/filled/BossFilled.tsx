import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBossFilled(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#BossFilled_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path
          opacity={0.35}
          d="M9.28 9.579H4.859V14h4.42V9.579ZM7.07 7.368A3.684 3.684 0 1 0 7.07 0a3.684 3.684 0 0 0 0 7.368Z"
        />
        <path d="M11.49 9.579H8.174l-.622 1.036L8.476 14h3.014a2.21 2.21 0 1 0 0-4.421ZM6.586 10.615l-.622-1.036H2.648a2.21 2.21 0 1 0 0 4.421h3.014l.924-3.385Z" />
      </g>
      <defs>
        <clipPath id="BossFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgBossFilled);
