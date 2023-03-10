import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgRightArrowOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7.97 1.236a.583.583 0 0 0-.406 1.001l4.446 4.446H.59a.583.583 0 1 0 0 1.166H12.01l-4.446 4.446a.584.584 0 1 0 .824.825l5.441-5.442a.583.583 0 0 0 0-.824L8.39 1.413a.583.583 0 0 0-.42-.177Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgRightArrowOutline);
