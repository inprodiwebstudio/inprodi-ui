import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUpdwonOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#UpdwonOutline_svg__a)"
        fill={props.color || `currentColor`}
      >
        <path d="M6.996.174a.271.271 0 0 0-.198.093l-3.71 4.156a.323.323 0 0 0-.065.104.353.353 0 0 0 .06.353c.027.03.06.054.095.07a.259.259 0 0 0 .22-.003.287.287 0 0 0 .093-.072L7 .945l3.509 3.93c.026.03.057.055.092.072a.26.26 0 0 0 .315-.067.352.352 0 0 0-.004-.457L7.202.267a.285.285 0 0 0-.095-.07.259.259 0 0 0-.111-.023ZM7.004 14.174a.286.286 0 0 0 .198-.084l3.71-3.71a.286.286 0 1 0-.403-.404L7 13.484 3.491 9.977a.286.286 0 1 0-.403.403l3.71 3.71a.286.286 0 0 0 .206.085Z" />
      </g>
      <defs>
        <clipPath id="UpdwonOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgUpdwonOutline);
