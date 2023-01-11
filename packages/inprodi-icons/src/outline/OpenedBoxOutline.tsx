import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgOpenedBoxOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M4.268 1.007a.5.5 0 0 0-.38.174L2.502 2.802a.5.5 0 0 0-.168.375V5.34l-1.22-1.496a.51.51 0 0 1 .004-.649l.66-.792a.167.167 0 0 1 .136-.063c.019 0 .047.009.076.023l.604-.797a1.164 1.164 0 0 0-1.584.197l-.66.792a1.513 1.513 0 0 0-.01 1.921l1.327 1.628v5.42c0 1.008.827 1.834 1.834 1.834H3.5l7-.017a1.841 1.841 0 0 0 1.833-1.833V6.103l1.327-1.627a1.513 1.513 0 0 0-.01-1.921l-.66-.792a1.164 1.164 0 0 0-1.584-.197l.603.797a.197.197 0 0 1 .076-.023.167.167 0 0 1 .137.063l.66.792a.51.51 0 0 1 .003.65l-1.219 1.494V3.176l-.001-.023a.5.5 0 0 0-.145-.33v-.001l-1.224-1.617a.5.5 0 0 0-.398-.198h-5.63Zm.23 1H9.65l.511.675H3.92l.579-.675ZM3.334 3.682h7.334v1.659H3.333V3.682Zm-.667 2.659h8.668v5.167a.826.826 0 0 1-.833.833h-.002l-7 .017a.826.826 0 0 1-.833-.833V6.34ZM5.5 7.674a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1h-3Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgOpenedBoxOutline);
