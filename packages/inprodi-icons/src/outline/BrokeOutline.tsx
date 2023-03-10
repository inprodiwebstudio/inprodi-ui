import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBrokeOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M4.614.6a.477.477 0 0 0-.373.781l1.272 1.591a.478.478 0 0 0 .746-.596L4.987.785A.477.477 0 0 0 4.614.6Zm4.757 0a.477.477 0 0 0-.358.185l-1.272 1.59a.477.477 0 1 0 .746.597l1.272-1.59A.477.477 0 0 0 9.371.6Zm-6.19 3.188A3.19 3.19 0 0 0 0 6.969a3.19 3.19 0 0 0 3.182 3.182h1.75a.477.477 0 1 0 0-.954h-1.75A2.22 2.22 0 0 1 .955 6.969a2.22 2.22 0 0 1 2.227-2.227h1.75a.477.477 0 1 0 0-.954h-1.75Zm5.887 0a.477.477 0 1 0 0 .954h1.75a2.22 2.22 0 0 1 2.228 2.227 2.22 2.22 0 0 1-2.228 2.228h-1.75a.477.477 0 1 0 0 .954h1.75A3.19 3.19 0 0 0 14 6.97a3.19 3.19 0 0 0-3.182-3.181h-1.75Zm-.954 6.994a.477.477 0 0 0-.373.781l1.272 1.591a.476.476 0 1 0 .746-.597l-1.272-1.59a.478.478 0 0 0-.373-.185Zm-2.243 0a.476.476 0 0 0-.358.184l-1.272 1.591a.478.478 0 0 0 .746.597l1.272-1.59a.477.477 0 0 0-.388-.781Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgBrokeOutline);
