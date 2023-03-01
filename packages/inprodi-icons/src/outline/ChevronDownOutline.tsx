import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgChevronDownOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M13.75 3.587a.5.5 0 0 0-.858-.348L6.752 9.38.61 3.24a.5.5 0 1 0-.706.706l6.494 6.495a.5.5 0 0 0 .706 0L13.6 3.945a.5.5 0 0 0 .151-.358Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgChevronDownOutline);
