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
        d="M4.268 1.07a.5.5 0 0 0-.38.174l-1.387 1.62a.5.5 0 0 0-.168.376v2.163l-1.22-1.496a.51.51 0 0 1 .004-.65l.66-.792a.167.167 0 0 1 .136-.062c.019 0 .047.008.076.023l.604-.798a1.164 1.164 0 0 0-1.584.197l-.66.792A1.513 1.513 0 0 0 .34 4.54l1.327 1.627v5.421c0 1.007.827 1.834 1.834 1.834H3.5l7-.017a1.841 1.841 0 0 0 1.833-1.834V6.166l1.327-1.627a1.513 1.513 0 0 0-.01-1.922l-.66-.792a1.164 1.164 0 0 0-1.584-.197l.603.798a.197.197 0 0 1 .076-.023.167.167 0 0 1 .137.062l.66.793a.51.51 0 0 1 .003.649l-1.219 1.494V3.24l-.001-.024a.5.5 0 0 0-.145-.33l-1.224-1.618A.5.5 0 0 0 9.9 1.07h-5.63Zm.23 1H9.65l.511.675H3.92l.579-.675ZM3.334 3.745h7.334v1.658H3.333V3.745Zm-.667 2.658h8.668v5.167a.826.826 0 0 1-.833.834h-.002l-7 .017a.826.826 0 0 1-.833-.834V6.403ZM5.5 7.737a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1h-3Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgOpenedBoxOutline);
