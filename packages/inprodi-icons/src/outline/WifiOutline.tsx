import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgWifiOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7 2.174c-2.482 0-4.964.859-6.855 2.577a.432.432 0 0 0-.106.14.397.397 0 0 0 .1.474.515.515 0 0 0 .676-.006c3.42-3.108 8.95-3.108 12.37 0a.514.514 0 0 0 .676.006.43.43 0 0 0 .104-.142.396.396 0 0 0-.004-.333.432.432 0 0 0-.107-.14C11.964 3.034 9.482 2.175 7 2.175ZM7 4.73c-1.762 0-3.524.609-4.865 1.828a.432.432 0 0 0-.107.14.397.397 0 0 0 .1.474.515.515 0 0 0 .676-.006c2.321-2.11 6.07-2.11 8.392 0a.514.514 0 0 0 .676.006.43.43 0 0 0 .104-.142.396.396 0 0 0-.004-.333.43.43 0 0 0-.107-.14C10.524 5.34 8.762 4.73 7 4.73Zm0 2.555c-1.042 0-2.084.36-2.877 1.08a.411.411 0 0 0-.138.304c0 .114.05.224.139.304.088.08.209.126.334.126a.498.498 0 0 0 .335-.126c1.223-1.11 3.191-1.11 4.414 0a.514.514 0 0 0 .676.006.43.43 0 0 0 .103-.141.397.397 0 0 0-.003-.333.432.432 0 0 0-.107-.14c-.792-.72-1.834-1.08-2.876-1.08Zm.06 2.596c-.335 0-.656.12-.893.336-.236.215-.37.506-.37.81 0 .304.134.596.37.81.237.216.558.337.892.337.335 0 .656-.121.893-.336.236-.215.37-.507.37-.81 0-.305-.134-.596-.37-.811a1.329 1.329 0 0 0-.893-.336Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgWifiOutline);
