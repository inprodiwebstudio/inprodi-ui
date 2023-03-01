import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgKey2Outline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Key2Outline_svg__a)">
        <path
          d="M4.63.236c.64 0 1.283.243 1.769.73a2.51 2.51 0 0 1 0 3.538l-.64.639 4.846 4.845a.5.5 0 0 1 .115.115l1.875 1.875a.5.5 0 0 1 .142.143l.928.927a.5.5 0 1 1-.707.708l-.647-.647-.981.98a.5.5 0 0 1-.707 0l-1.648-1.648-.314.314a.499.499 0 0 1-.861-.352.5.5 0 0 1 .154-.356l.611-.612a.5.5 0 0 1 .112-.11L9.6 10.4 5.052 5.85l-.638.639a2.51 2.51 0 0 1-3.538 0 2.509 2.509 0 0 1 0-3.538l.638-.639-.232-.232a.5.5 0 1 1 .707-.708l.233.233.638-.64a2.494 2.494 0 0 1 1.77-.73Zm0 .995c-.384 0-.767.147-1.062.442l-.639.64.061.06a.5.5 0 1 1-.708.708l-.06-.061-.639.638c-.59.59-.59 1.533 0 2.123.59.59 1.533.59 2.123 0l.639-.638-.06-.06a.5.5 0 1 1 .707-.708l.06.06.64-.638c.59-.59.59-1.533 0-2.124a1.497 1.497 0 0 0-1.063-.442Zm5.68 9.876-.628.627 1.294 1.294.627-.627-1.294-1.294Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="Key2Outline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgKey2Outline);
