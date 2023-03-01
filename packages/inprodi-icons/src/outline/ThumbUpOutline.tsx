import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgThumbUpOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ThumbUpOutline_svg__a)">
        <path
          d="M6.47.236a.554.554 0 0 0-.44.239s-.582.845-1.286 1.804c-.704.96-1.562 2.057-1.969 2.442-.771.729-1.317 1.721-1.317 2.844v2.423a4.256 4.256 0 0 0 4.248 4.248h3.45a2.778 2.778 0 0 0 2.75-2.425l.192-1.377.31-2.217.127-.903A2.042 2.042 0 0 0 10.523 5H7.394a10.26 10.26 0 0 0 .575-1.852c.078-.378.142-.675.142-.99 0-.76-.388-1.305-.764-1.578C6.971.308 6.58.243 6.58.243a.554.554 0 0 0-.11-.007Zm.211 1.235c.008.006.007.002.015.008.16.115.307.254.307.68 0 .138-.044.394-.12.769a8.81 8.81 0 0 1-.576 1.858.976.976 0 0 0 .039.862.936.936 0 0 0 .792.461h3.385c.57 0 .993.486.914 1.051l-.126.904-.31 2.217-.194 1.382-.001.009a1.655 1.655 0 0 1-1.65 1.456h-3.45c-1.74 0-3.14-1.4-3.14-3.14V7.565c0-.764.372-1.473.97-2.039.578-.546 1.386-1.616 2.101-2.59.572-.78.87-1.214 1.044-1.465Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ThumbUpOutline_svg__a">
          <path fill="#fff" transform="translate(0 .236)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgThumbUpOutline);
