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
          d="M6.47.174a.554.554 0 0 0-.44.239s-.582.845-1.286 1.804c-.704.96-1.562 2.057-1.969 2.442-.771.729-1.317 1.72-1.317 2.844v2.422a4.257 4.257 0 0 0 4.248 4.249h3.45a2.778 2.778 0 0 0 2.75-2.425l.192-1.378.31-2.216.127-.903a2.042 2.042 0 0 0-2.012-2.313H7.394a10.26 10.26 0 0 0 .575-1.852c.077-.379.142-.675.142-.99 0-.76-.388-1.305-.764-1.578C6.971.246 6.58.18 6.58.18a.554.554 0 0 0-.11-.007Zm.211 1.235c.008.005.007.002.015.007.16.116.307.255.307.68 0 .139-.044.395-.12.77a8.81 8.81 0 0 1-.576 1.858.976.976 0 0 0 .039.862.936.936 0 0 0 .792.46h3.385c.57 0 .993.487.914 1.052l-.126.904-.31 2.216-.194 1.383-.001.008a1.656 1.656 0 0 1-1.65 1.456h-3.45c-1.74 0-3.14-1.399-3.14-3.14V7.503c0-.764.372-1.473.97-2.04.578-.545 1.386-1.615 2.101-2.59.572-.78.87-1.213 1.044-1.464Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ThumbUpOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgThumbUpOutline);
