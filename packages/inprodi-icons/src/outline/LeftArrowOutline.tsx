import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgLeftArrowOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.013.056a.583.583 0 0 0-.401.176L.171 5.673a.583.583 0 0 0 0 .825l5.44 5.44a.584.584 0 1 0 .825-.824L1.99 6.668H13.41a.582.582 0 1 0 0-1.166H1.99l4.446-4.446a.583.583 0 0 0-.423-1Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgLeftArrowOutline);
