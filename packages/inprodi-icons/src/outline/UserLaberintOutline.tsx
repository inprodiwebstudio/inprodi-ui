import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUserLaberintOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#UserLaberintOutline_svg__a)">
        <path
          d="M7 .174c-3.86 0-7 3.14-7 7 0 1.474.46 2.845 1.24 3.973a.525.525 0 1 0 .863-.597A5.91 5.91 0 0 1 1.05 7.174 5.94 5.94 0 0 1 6.475 1.25v1.406a4.535 4.535 0 0 0-1.652.529.525.525 0 1 0 .504.92 3.492 3.492 0 0 1 4.74 4.74.525.525 0 1 0 .922.506 4.523 4.523 0 0 0 .561-2.177 4.558 4.558 0 0 0-4.025-4.518V1.248a5.91 5.91 0 0 1 2.851 1.029.525.525 0 1 0 .598-.864A6.972 6.972 0 0 0 7 .173Zm5.314 2.793a.525.525 0 0 0-.417.83 5.91 5.91 0 0 1 1.053 3.377 5.94 5.94 0 0 1-5.425 5.923V11.69a4.535 4.535 0 0 0 1.652-.529.524.524 0 1 0-.504-.92 3.492 3.492 0 0 1-4.74-4.74.525.525 0 1 0-.922-.506 4.518 4.518 0 0 0-.561 2.178 4.558 4.558 0 0 0 4.025 4.517v1.408a5.908 5.908 0 0 1-2.851-1.03.524.524 0 0 0-.813.322.525.525 0 0 0 .215.543A6.97 6.97 0 0 0 7 14.174c3.86 0 7-3.14 7-7 0-1.475-.46-2.846-1.24-3.974a.525.525 0 0 0-.446-.233ZM7 4.724a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Zm-1.225 2.8a.525.525 0 0 0-.525.525v.203c0 .564.784 1.022 1.75 1.022s1.75-.458 1.75-1.022V8.05a.525.525 0 0 0-.525-.525h-2.45Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="UserLaberintOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgUserLaberintOutline);
