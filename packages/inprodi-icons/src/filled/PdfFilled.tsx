import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPdfFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M1.458 11.9V2.1c0-1.16.94-2.1 2.1-2.1h4.9l4.2 4.2v7.7a2.1 2.1 0 0 1-2.1 2.1h-7a2.1 2.1 0 0 1-2.1-2.1Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M8.458 2.8V0l4.2 4.2h-2.8a1.4 1.4 0 0 1-1.4-1.4ZM9.39 11.273c-.592 0-1.252-.602-1.823-1.425-.416.013-.81.054-1.173.115C5.73 11.05 4.977 11.9 4.403 11.9c-.632 0-.845-.624-.845-.909 0-.894 1.132-1.423 2.382-1.682.236-.402.465-.838.663-1.27-.292-.722-.47-1.426-.47-1.95 0-.333.068-.602.202-.803a.886.886 0 0 1 .763-.386c.283 0 .521.12.67.337.118.175.176.4.176.687 0 .494-.221 1.27-.566 2.099.166.376.36.749.567 1.088.48.002 1.14.046 1.677.227.774.26.936.687.936.999 0 .45-.365.936-1.167.936Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgPdfFilled);
