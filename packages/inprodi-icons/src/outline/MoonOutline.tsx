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
        d="M7 .836c-3.86 0-7 3.14-7 7s3.14 7 7 7a7 7 0 0 0 6.234-3.825.525.525 0 0 0-.412-.761A6.12 6.12 0 0 1 7.35 4.16c0-.913.205-1.776.565-2.557a.525.525 0 0 0-.44-.744C7.334.85 7.176.836 7 .836Zm-.293 1.08c-.239.71-.407 1.453-.407 2.245 0 3.407 2.395 6.239 5.586 6.966C10.82 12.711 9.057 13.786 7 13.786a5.942 5.942 0 0 1-5.95-5.95c0-3.192 2.504-5.765 5.657-5.92Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgMoonOutline);
