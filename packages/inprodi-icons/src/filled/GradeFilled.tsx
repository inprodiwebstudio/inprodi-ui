import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgGradeFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.35}
        d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="m8.478 9.629-.588-.373-1.112 1.112.372.588a.765.765 0 1 1-1.297.805L3.128 7.286a1.263 1.263 0 0 1 1.737-1.734l4.469 2.73a.763.763 0 0 1 .142 1.191l-.05.05a.763.763 0 0 1-.948.106ZM4.38 6.824l-.028.028 1.685 2.523.845-.845L4.38 6.824ZM8.4 6.3a.7.7 0 0 1-.495-1.195l1.4-1.4a.7.7 0 1 1 .99.99l-1.4 1.4A.698.698 0 0 1 8.4 6.3Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M9.8 6.3a.698.698 0 0 1-.495-.205l-1.4-1.4a.7.7 0 1 1 .99-.99l1.4 1.4A.7.7 0 0 1 9.8 6.3Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgGradeFilled);
