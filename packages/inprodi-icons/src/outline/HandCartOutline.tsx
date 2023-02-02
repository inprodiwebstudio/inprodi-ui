import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgHandCartOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#HandCartOutline_svg__a)">
        <path
          d="M2.208 1.17a1.77 1.77 0 0 0-.712.176L.312 1.92a.52.52 0 1 0 .453.936l1.184-.572a.746.746 0 0 1 1.024.386L6.017 9.9c.054.128.155.214.225.329-.393.047-.748.202-.978.46a1.587 1.587 0 0 0-.391 1.06c0 .376.122.759.391 1.061.269.303.692.5 1.169.5.477 0 .9-.197 1.169-.5.268-.302.391-.685.391-1.06 0-.099-.033-.195-.05-.293.554.127 1.14.133 1.697-.111l4.04-1.77a.52.52 0 1 0-.417-.953l-4.04 1.77a1.691 1.691 0 0 1-2.248-.897h.001l-3.045-7.23A1.806 1.806 0 0 0 2.208 1.17Zm8.25 1.377c-.142 0-.285.03-.422.09L6.919 3.99a1.1 1.1 0 0 0-.567 1.437l1.406 3.393a1.1 1.1 0 0 0 1.441.575l3.117-1.354c.548-.239.805-.89.567-1.438l-1.406-3.393-.003-.008a1.11 1.11 0 0 0-1.016-.656Zm.034 1.04c.01.004.02.014.026.03h.001l1.407 3.393a.259.259 0 0 0 .003.008c.014.032.004.055-.028.07L8.785 8.442c-.032.014-.055.005-.07-.027L7.31 5.022a.498.498 0 0 0-.004-.009c-.014-.032-.005-.054.028-.068L10.45 3.59c.017-.007.03-.008.042-.004ZM9.76 4.802a.52.52 0 0 0-.238.048l-.596.265a.52.52 0 1 0 .422.95l.596-.264a.52.52 0 0 0-.184-.999ZM6.433 11.23c.217 0 .313.062.391.15a.57.57 0 0 1 .129.37.57.57 0 0 1-.129.37c-.078.087-.174.15-.391.15-.217 0-.313-.063-.391-.15a.57.57 0 0 1-.13-.37.57.57 0 0 1 .13-.37c.078-.088.174-.15.39-.15Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="HandCartOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgHandCartOutline);