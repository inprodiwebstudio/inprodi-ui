import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgSaveOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#SaveOutline_svg__a)">
        <path
          d="M3.293.236a.583.583 0 0 0-.085.008H2.136A2.145 2.145 0 0 0 0 2.381v9.71c0 1.174.963 2.137 2.136 2.137h.682c.062.01.126.01.189 0h7.968c.063.01.126.01.189 0h.684a2.145 2.145 0 0 0 2.136-2.136V3.934a.583.583 0 0 0-.196-.435L10.292.39a.583.583 0 0 0-.387-.147h-.293a.583.583 0 0 0-.188 0H3.397a.583.583 0 0 0-.104-.008ZM2.136 1.41h.583v2.136c0 .744.616 1.36 1.36 1.36H8.74c.744 0 1.36-.616 1.36-1.36V1.779l2.719 2.417v7.896a.963.963 0 0 1-.972.97h-.194V8.597c0-.744-.615-1.36-1.36-1.36H3.69c-.744 0-1.36.616-1.36 1.36v4.467h-.194a.963.963 0 0 1-.97-.971V2.38c0-.543.427-.971.97-.971Zm1.748 0h5.05v2.136c0 .115-.08.194-.194.194H4.079a.186.186 0 0 1-.195-.194V1.41ZM3.69 8.402h6.604c.114 0 .194.08.194.194v4.467H3.496V8.596c0-.115.08-.194.194-.194Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="SaveOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgSaveOutline);
