import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCampfireFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5.856.42A.342.342 0 0 1 6.19 0c.08 0 .136.03.158.039.418.163 3.286 1.515 2.622 5.424.963-.58.619-1.707.934-1.707.118 0 .167.044.24.148 1.053 1.503 1.85 3.297 1.85 4.974A5.122 5.122 0 0 1 6.873 14c-3.11 0-5.122-2.62-5.122-5.122 0-4.161 4.904-4.93 4.106-8.458Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M6.74 5.012s-.087-.074-.213-.074a.345.345 0 0 0-.345.345c.345 2.068-2.068 2.758-2.068 5.171a2.758 2.758 0 1 0 5.516 0c0-1.965-1.731-4.588-2.89-5.442Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCampfireFilled);
