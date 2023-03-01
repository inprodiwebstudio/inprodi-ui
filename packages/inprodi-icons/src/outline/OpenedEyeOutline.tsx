import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgOpenedEyeOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.996 2.836c-3.302 0-6.21 2.288-6.982 5.287a.438.438 0 0 0 .847.218c.665-2.584 3.242-4.63 6.135-4.63s5.478 2.047 6.143 4.63a.438.438 0 0 0 .847-.218c-.772-3-3.689-5.287-6.99-5.287Zm.005 2.333a2.825 2.825 0 0 0-2.82 2.819 2.826 2.826 0 0 0 2.82 2.82 2.826 2.826 0 0 0 2.819-2.82A2.826 2.826 0 0 0 7 5.169Zm0 .875c1.078 0 1.944.865 1.944 1.944A1.938 1.938 0 0 1 7 9.932a1.937 1.937 0 0 1-1.944-1.944c0-1.079.865-1.944 1.944-1.944Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgOpenedEyeOutline);
