import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgPercentageOutline1(props: SVGProps<SVGSVGElement>) {
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
        d="M10.928 1.981a.438.438 0 0 0-.329.166l-7.875 9.625a.437.437 0 1 0 .677.553L11.276 2.7a.438.438 0 0 0-.348-.719Zm-6.99.297a1.903 1.903 0 0 0-1.896 1.895V5.34c0 1.042.854 1.896 1.895 1.896A1.903 1.903 0 0 0 5.833 5.34V4.173a1.903 1.903 0 0 0-1.896-1.895Zm0 .875c.566 0 1.02.454 1.02 1.02V5.34c0 .567-.454 1.02-1.02 1.02-.567 0-1.021-.453-1.021-1.02V4.173c0-.566.454-1.02 1.02-1.02Zm6.124 4.083a1.903 1.903 0 0 0-1.895 1.896v1.166c0 1.042.854 1.896 1.896 1.896a1.903 1.903 0 0 0 1.895-1.896V9.132a1.903 1.903 0 0 0-1.896-1.896Zm0 .875c.567 0 1.021.454 1.021 1.02v1.167c0 .567-.454 1.021-1.02 1.021-.567 0-1.021-.454-1.021-1.02V9.131c0-.567.454-1.021 1.02-1.021Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgPercentageOutline1);
