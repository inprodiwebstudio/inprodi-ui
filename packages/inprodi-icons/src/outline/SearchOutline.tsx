import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgSearchOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M5.635.836A5.644 5.644 0 0 0 0 6.47a5.644 5.644 0 0 0 5.635 5.636 5.607 5.607 0 0 0 3.548-1.263l3.813 3.813a.583.583 0 1 0 .825-.825l-3.813-3.813a5.607 5.607 0 0 0 1.263-3.548A5.644 5.644 0 0 0 5.635.836Zm0 1.166a4.46 4.46 0 0 1 4.47 4.47 4.452 4.452 0 0 1-1.247 3.097.583.583 0 0 0-.125.125 4.452 4.452 0 0 1-3.098 1.247 4.46 4.46 0 0 1-4.469-4.47 4.46 4.46 0 0 1 4.47-4.47Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgSearchOutline);
