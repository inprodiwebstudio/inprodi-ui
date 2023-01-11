import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMailOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.275 1.574A2.283 2.283 0 0 0 0 3.849v6.65a2.283 2.283 0 0 0 2.275 2.275h9.45A2.283 2.283 0 0 0 14 10.499v-6.65a2.283 2.283 0 0 0-2.275-2.275h-9.45Zm0 1.05h9.45c.683 0 1.225.542 1.225 1.225v.386L7 7.452 1.05 4.235V3.85c0-.683.542-1.225 1.225-1.225ZM1.05 5.429l5.7 3.082a.525.525 0 0 0 .5 0l5.7-3.082v5.07c0 .682-.542 1.225-1.225 1.225h-9.45a1.217 1.217 0 0 1-1.225-1.225v-5.07Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgMailOutline);
