import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgThumbDownOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#ThumbDownOutline_svg__a)">
        <path
          d="M5.706.174a4.256 4.256 0 0 0-4.248 4.248v2.422c0 1.123.546 2.115 1.317 2.844.407.385 1.265 1.482 1.969 2.442.704.96 1.286 1.804 1.286 1.804a.554.554 0 0 0 .55.232s.39-.065.767-.338c.376-.273.764-.818.764-1.578 0-.315-.065-.612-.141-.99h-.001a10.258 10.258 0 0 0-.575-1.852h3.129c1.224 0 2.182-1.1 2.012-2.313l-.127-.903-.31-2.216-.192-1.375v-.003A2.778 2.778 0 0 0 9.155.174h-3.45Zm0 1.108h3.45a1.655 1.655 0 0 1 1.651 1.464L11 4.13l.31 2.216.127.904a.913.913 0 0 1-.914 1.051H7.138a.936.936 0 0 0-.792.461.976.976 0 0 0-.04.862 8.81 8.81 0 0 1 .577 1.858c.076.375.12.63.12.77 0 .425-.148.564-.307.68-.008.005-.007.001-.015.007-.174-.251-.472-.685-1.044-1.464-.715-.975-1.523-2.045-2.1-2.59-.6-.567-.97-1.276-.97-2.04V4.422c0-1.741 1.399-3.14 3.14-3.14Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ThumbDownOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgThumbDownOutline);
