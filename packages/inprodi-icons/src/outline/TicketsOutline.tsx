import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgTicketsOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#TicketsOutline_svg__a)">
        <path
          d="M11.756.99a1.18 1.18 0 0 0-.229.03l-9.94 2.338h4.367l5.803-1.365a.166.166 0 0 1 .2.124l.297 1.241h1.022l-.346-1.47A1.16 1.16 0 0 0 11.756.99ZM1.166 4.024C.529 4.025 0 4.553 0 5.192v1.676a.5.5 0 0 0 .562.496A1.324 1.324 0 0 1 2 8.691 1.324 1.324 0 0 1 .562 10.02a.498.498 0 0 0-.562.496v1.677c0 .638.528 1.166 1.167 1.166h11.666c.639 0 1.167-.528 1.167-1.166v-1.677a.5.5 0 0 0-.562-.496A1.324 1.324 0 0 1 12 8.692a1.324 1.324 0 0 1 1.438-1.328.5.5 0 0 0 .562-.496V5.192c0-.639-.528-1.167-1.167-1.167H1.167Zm0 1h11.667a.16.16 0 0 1 .167.167v1.234c-1.12.17-2 1.1-2 2.266 0 1.165.88 2.096 2 2.265v1.235a.16.16 0 0 1-.167.166H1.167A.16.16 0 0 1 1 12.192v-1.235c1.12-.169 2-1.1 2-2.265s-.88-2.097-2-2.266V5.192a.16.16 0 0 1 .167-.167Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="TicketsOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgTicketsOutline);
