import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPhoneColor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#PhoneColor_svg__a)">
        <path
          d="M1.076.69s-.117 1.376.42 2.453c.536 1.078 2.013 3.294 2.595 2.923-.274-.364-.09-.773.116-.972.134-.13.761-.723 1.186-1.123a.712.712 0 0 0 .135-.86L4.026.37A.712.712 0 0 0 3.19.031L1.076.69ZM13.31 12.925s-1.375.117-2.453-.42C9.78 11.97 7.563 10.492 7.935 9.91c.363.274.772.09.971-.116.13-.134.723-.762 1.124-1.186a.712.712 0 0 1 .86-.136l2.74 1.502a.712.712 0 0 1 .338.836l-.658 2.114Z"
          fill="#1A9BA1"
        />
        <path
          d="M5.89 8.11a21.186 21.186 0 0 0 7.42 4.814l-.394.68a.781.781 0 0 1-.96.343A21.21 21.21 0 0 1 4.78 9.22 21.202 21.202 0 0 1 .054 2.044a.781.781 0 0 1 .341-.96l.68-.394A21.19 21.19 0 0 0 5.89 8.11Z"
          fill="#37C6D0"
        />
      </g>
      <defs>
        <clipPath id="PhoneColor_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgPhoneColor);
