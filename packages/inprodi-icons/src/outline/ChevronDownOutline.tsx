import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgChevronDownOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.75 3.525a.5.5 0 0 0-.858-.348l-6.14 6.14-6.142-6.14a.5.5 0 1 0-.706.706l6.494 6.494a.5.5 0 0 0 .706 0L14.6 3.883a.501.501 0 0 0 .151-.358Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgChevronDownOutline);
