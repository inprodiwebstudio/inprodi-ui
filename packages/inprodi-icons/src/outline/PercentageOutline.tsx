import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPercentageOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.833 1.774A1.841 1.841 0 0 0 0 3.607v7.667c0 1.006.827 1.833 1.833 1.833h10.334A1.841 1.841 0 0 0 14 11.274V3.607a1.841 1.841 0 0 0-1.834-1.833H1.833Zm0 1h10.334c.466 0 .833.367.833.833v7.667a.826.826 0 0 1-.834.833H1.833A.826.826 0 0 1 1 11.274V3.607c0-.466.367-.833.833-.833Zm7.324 1.995a.5.5 0 0 0-.344.151L4.48 9.253a.5.5 0 1 0 .707.707L9.52 5.627a.5.5 0 0 0-.363-.858Zm-3.99.005a.833.833 0 1 0 0 1.666.833.833 0 0 0 0-1.666ZM8.833 8.44a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgPercentageOutline);
