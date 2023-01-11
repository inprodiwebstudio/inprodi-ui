import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCurriculumFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.35}
        d="M12.2 4.2 8 0H3.1A2.1 2.1 0 0 0 1 2.1v9.8c0 1.16.94 2.1 2.1 2.1h7a2.1 2.1 0 0 0 2.1-2.1V4.2Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M8 2.8V0l4.2 4.2H9.4A1.4 1.4 0 0 1 8 2.8ZM6.6 7.7a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM8.35 9.1h-3.5a1.05 1.05 0 0 0 0 2.1h3.5a1.05 1.05 0 0 0 0-2.1Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCurriculumFilled);
