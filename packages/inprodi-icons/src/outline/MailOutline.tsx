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
        d="M2.275 1.636A2.283 2.283 0 0 0 0 3.911v6.65a2.283 2.283 0 0 0 2.275 2.275h9.45A2.283 2.283 0 0 0 14 10.561v-6.65a2.283 2.283 0 0 0-2.275-2.275h-9.45Zm0 1.05h9.45c.683 0 1.225.543 1.225 1.225v.387L7 7.514 1.05 4.298v-.387c0-.682.542-1.225 1.225-1.225ZM1.05 5.492l5.7 3.081a.525.525 0 0 0 .5 0l5.7-3.081v5.07c0 .682-.542 1.224-1.225 1.224h-9.45a1.217 1.217 0 0 1-1.225-1.225v-5.07Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgMailOutline);
