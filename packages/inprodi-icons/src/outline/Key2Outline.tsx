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
          d="M4.63.174c.64 0 1.283.243 1.769.73a2.51 2.51 0 0 1 0 3.538l-.64.638 4.846 4.845a.5.5 0 0 1 .115.116l1.875 1.874a.5.5 0 0 1 .142.144l.928.927a.499.499 0 0 1-.351.861.501.501 0 0 1-.356-.154l-.647-.647-.981.981a.5.5 0 0 1-.707 0l-1.648-1.648-.314.314a.5.5 0 1 1-.707-.708l.611-.612a.502.502 0 0 1 .112-.111l.924-.925-4.549-4.549-.638.639a2.51 2.51 0 0 1-3.538 0 2.509 2.509 0 0 1 0-3.538l.638-.639-.232-.233a.5.5 0 1 1 .707-.707l.233.232.638-.639a2.494 2.494 0 0 1 1.77-.73Zm0 .994c-.384 0-.767.148-1.062.443l-.639.64.061.06a.5.5 0 1 1-.708.707l-.06-.06-.639.638c-.59.59-.59 1.533 0 2.123.59.59 1.533.59 2.123 0l.639-.639-.06-.06a.5.5 0 1 1 .707-.708l.06.06.64-.638c.59-.59.59-1.533 0-2.123a1.497 1.497 0 0 0-1.063-.443Zm5.68 9.877-.628.627 1.294 1.294.627-.627-1.294-1.294Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="Key2Outline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgKey2Outline);
