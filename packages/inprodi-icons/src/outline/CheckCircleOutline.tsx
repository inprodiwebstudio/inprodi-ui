import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCheckCircleOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7 .774c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7a6.948 6.948 0 0 0-.744-3.124l-.786.786c.308.718.48 1.508.48 2.338 0 3.28-2.67 5.95-5.95 5.95-3.28 0-5.95-2.67-5.95-5.95 0-3.281 2.67-5.95 5.95-5.95a5.92 5.92 0 0 1 4.031 1.586l.742-.742A6.966 6.966 0 0 0 7 .774Zm5.415 2.445a.525.525 0 0 0-.361.158l-5.929 5.93-1.379-1.38a.525.525 0 1 0-.742.743l1.75 1.75a.525.525 0 0 0 .742 0l6.3-6.3a.525.525 0 0 0-.381-.901Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgCheckCircleOutline);
