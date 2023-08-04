import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgMergeCellsOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#MergeCellsOutline_svg__a)">
        <path
          d="M2.144.174A2.145 2.145 0 0 0 .008 2.31v1.165c0 1.174.963 2.137 2.136 2.137h9.712a2.145 2.145 0 0 0 2.136-2.137V2.31A2.145 2.145 0 0 0 11.856.174H2.144Zm0 1.165h9.712c.543 0 .97.428.97.971v1.165a.963.963 0 0 1-.97.972H2.144a.963.963 0 0 1-.97-.972V2.31c0-.543.427-.971.97-.971ZM.008 5.449v3.758a.583.583 0 0 0 0 .189v2.626c0 1.178.958 2.136 2.136 2.136h9.712a2.139 2.139 0 0 0 2.136-2.136V9.398a.581.581 0 0 0 0-.189V5.45a2.92 2.92 0 0 1-1.165.77v2.5H7.583V6.39H6.417v2.33H1.173v-2.5a2.916 2.916 0 0 1-1.165-.77Zm1.165 4.436h5.244v3.108H2.144a.973.973 0 0 1-.97-.971V9.885Zm6.41 0h5.244v2.137a.972.972 0 0 1-.971.97H7.583V9.886Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="MergeCellsOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgMergeCellsOutline);
