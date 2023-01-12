import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgVideoFilled(props: SVGProps<SVGSVGElement>) {
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
        d="m9.46 6-3.5-2.1a.7.7 0 0 0-1.06.6v4.2a.7.7 0 0 0 1.06.6l3.5-2.1a.7.7 0 0 0 0-1.2Z"
        fill={props.color || `currentColor`}
      />
      <path
        opacity={0.35}
        d="M11.9 1H2.1A2.1 2.1 0 0 0 0 3.1v7c0 1.16.94 2.1 2.1 2.1h9.8a2.1 2.1 0 0 0 2.1-2.1v-7A2.1 2.1 0 0 0 11.9 1Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgVideoFilled);
