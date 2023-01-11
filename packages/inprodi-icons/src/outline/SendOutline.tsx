import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgSendOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M.506-.313A.525.525 0 0 0 .04.41l2.545 6.278-2.545 6.277a.525.525 0 0 0 .72.668L13.71 7.156a.525.525 0 0 0 0-.939L.76-.258a.525.525 0 0 0-.254-.055Zm1.028 1.616 10.768 5.384L1.534 12.07l1.97-4.858h4.721a.525.525 0 1 0 0-1.05h-4.72l-1.97-4.859Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgSendOutline);
