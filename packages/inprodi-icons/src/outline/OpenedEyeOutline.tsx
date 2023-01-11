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
        d="M6.996 2.774C3.694 2.774.786 5.062.014 8.06a.438.438 0 1 0 .847.217c.665-2.584 3.242-4.63 6.135-4.63s5.478 2.047 6.143 4.63a.438.438 0 0 0 .847-.217c-.772-3-3.689-5.287-6.99-5.287Zm.005 2.333a2.825 2.825 0 0 0-2.82 2.819 2.826 2.826 0 0 0 2.82 2.819 2.826 2.826 0 0 0 2.819-2.82A2.826 2.826 0 0 0 7 5.107Zm0 .875c1.078 0 1.944.865 1.944 1.944A1.938 1.938 0 0 1 7 9.87a1.937 1.937 0 0 1-1.944-1.944c0-1.08.865-1.944 1.944-1.944Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgOpenedEyeOutline);
