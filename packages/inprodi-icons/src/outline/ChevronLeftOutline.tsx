import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgChevronLeftOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M9.957.592a.525.525 0 0 0-.359.164L3.648 6.88a.525.525 0 0 0 0 .731l5.95 6.125a.526.526 0 1 0 .754-.731l-5.595-5.76 5.595-5.759a.525.525 0 0 0-.395-.895Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgChevronLeftOutline);
