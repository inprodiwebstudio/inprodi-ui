import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgNoteOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M1.75.774C.79.774 0 1.564 0 2.524v10.5c0 .96.79 1.75 1.75 1.75h7.389a.584.584 0 0 0 .412-.171l.006-.006 4.272-4.272c.11-.11.171-.258.171-.412v-7.39c0-.959-.79-1.75-1.75-1.75H1.75Zm0 1.166h10.5c.33 0 .583.254.583.584v6.805h-2.527c-.96 0-1.75.79-1.75 1.75v2.528H1.75a.575.575 0 0 1-.583-.583v-10.5c0-.33.254-.584.583-.584Zm1.944 1.944a.584.584 0 1 0 0 1.167h6.612a.583.583 0 1 0 0-1.167H3.694Zm0 2.722a.583.583 0 1 0 0 1.167H8.75a.584.584 0 1 0 0-1.167H3.694Zm6.612 3.89h1.703l-2.287 2.286V11.08c0-.329.254-.583.584-.583Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgNoteOutline);
