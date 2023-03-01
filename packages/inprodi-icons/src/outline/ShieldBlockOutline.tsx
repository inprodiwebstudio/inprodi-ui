import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgShieldBlockOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.926.836a.467.467 0 0 0-.327.12S4.264 3.014 1.467 3.014A.467.467 0 0 0 1 3.481v3.814c0 2.077.961 5.496 5.73 7.505a.467.467 0 0 0 .362 0c4.769-2.01 5.73-5.428 5.73-7.505V3.48a.467.467 0 0 0-.467-.467C9.558 3.014 7.223.956 7.223.956a.467.467 0 0 0-.297-.12Zm-.015 1.067c.642.516 2.523 1.838 4.978 2.005v3.387c0 1.786-.687 4.668-4.978 6.554C2.62 11.963 1.933 9.08 1.933 7.295V3.908c2.455-.167 4.336-1.49 4.978-2.005Zm0 2.667A3.118 3.118 0 0 0 3.8 7.68a3.118 3.118 0 0 0 3.111 3.112 3.118 3.118 0 0 0 3.111-3.111A3.118 3.118 0 0 0 6.911 4.57Zm0 .933c.432 0 .81.155 1.148.37L5.103 8.828c-.214-.337-.37-.715-.37-1.147a2.17 2.17 0 0 1 2.178-2.178Zm1.808 1.03c.214.337.37.716.37 1.148A2.17 2.17 0 0 1 6.91 9.858c-.432 0-.81-.155-1.148-.37L8.72 6.533Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgShieldBlockOutline);
