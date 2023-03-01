import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgSendOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M.506.774a.525.525 0 0 0-.467.722l2.545 6.278L.039 14.05a.525.525 0 0 0 .72.667L13.71 8.243a.525.525 0 0 0 0-.94L.76.83A.525.525 0 0 0 .506.774ZM1.534 2.39l10.768 5.384-10.768 5.383 1.97-4.858h4.721a.525.525 0 1 0 0-1.05h-4.72L1.534 2.39Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgSendOutline);
