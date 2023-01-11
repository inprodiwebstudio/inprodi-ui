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
        d="M7.97 1.174a.583.583 0 0 0-.406 1l4.446 4.447H.59a.583.583 0 1 0 0 1.166H12.01l-4.446 4.446a.584.584 0 1 0 .824.824l5.441-5.44a.583.583 0 0 0 0-.825L8.39 1.35a.583.583 0 0 0-.42-.176Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgRightArrowOutline);
