import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgCalendarDeleteOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#CalendarDeleteOutline_svg__a)">
        <path
          d="M2.275.174A2.278 2.278 0 0 0 0 2.449v8.05a2.278 2.278 0 0 0 2.275 2.275H6.32a4.525 4.525 0 0 1-.498-1.05H2.275c-.675 0-1.225-.55-1.225-1.225v-6.48h10.5v1.977c.374.12.725.29 1.05.498V2.45A2.278 2.278 0 0 0 10.325.174h-8.05Zm0 1.05h8.05c.676 0 1.225.549 1.225 1.225v.52H1.05v-.52c0-.676.55-1.225 1.225-1.225Zm1.05 4.2a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm2.975 0a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Zm3.85 1.05a3.85 3.85 0 1 0 0 7.7 3.85 3.85 0 0 0 0-7.7ZM8.4 8.224c.09 0 .179.034.247.102L10.15 9.83l1.502-1.503a.35.35 0 1 1 .496.495l-1.503 1.503 1.503 1.502a.35.35 0 1 1-.495.495l-1.503-1.502-1.503 1.502a.349.349 0 0 1-.494 0 .35.35 0 0 1 0-.495l1.502-1.502L8.153 8.82a.35.35 0 0 1 .247-.597Zm-5.075.35a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="CalendarDeleteOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgCalendarDeleteOutline);
