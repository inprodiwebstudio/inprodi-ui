import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgUploadOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#UploadOutline_svg__a)">
        <path
          d="M6.992.174a.583.583 0 0 0-.404.17L4.254 2.679a.583.583 0 1 0 .825.825l1.338-1.338v8.314a.584.584 0 1 0 1.166 0V2.165l1.338 1.338a.583.583 0 1 0 .825-.825L7.412.345a.583.583 0 0 0-.42-.171ZM2.139 4.45A2.148 2.148 0 0 0 0 6.591v5.444c0 1.174.965 2.139 2.139 2.139h9.722A2.148 2.148 0 0 0 14 12.034V6.59a2.148 2.148 0 0 0-2.139-2.139h-.778a.584.584 0 1 0 0 1.167h.778c.544 0 .972.428.972.972v5.445a.964.964 0 0 1-.972.972H2.14a.964.964 0 0 1-.972-.972V6.59c0-.543.428-.972.972-.972h.778a.583.583 0 1 0 0-1.167h-.778Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="UploadOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgUploadOutline);
