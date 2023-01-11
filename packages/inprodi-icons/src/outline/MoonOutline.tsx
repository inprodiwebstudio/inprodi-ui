import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMoonOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7 .774c-3.86 0-7 3.14-7 7s3.14 7 7 7a7 7 0 0 0 6.234-3.826.526.526 0 0 0-.412-.76 6.12 6.12 0 0 1-5.472-6.09c0-.914.205-1.776.565-2.557a.525.525 0 0 0-.44-.744C7.334.787 7.176.774 7 .774Zm-.293 1.079c-.239.71-.407 1.454-.407 2.246 0 3.407 2.395 6.238 5.586 6.966C10.82 12.648 9.057 13.724 7 13.724a5.942 5.942 0 0 1-5.95-5.95c0-3.192 2.504-5.766 5.657-5.921Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgMoonOutline);
