import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgChevronRightOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M3.752.174a.5.5 0 0 0-.348.858l6.14 6.14-6.14 6.142a.499.499 0 1 0 .706.706l6.494-6.494a.5.5 0 0 0 0-.707L4.11.325a.5.5 0 0 0-.358-.151Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgChevronRightOutline);
