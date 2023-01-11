import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgFilterOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M.972-.313A.98.98 0 0 0 0 .659v1.202a2.918 2.918 0 0 0 1.114 2.292l3.942 3.075v5.876a.584.584 0 0 0 .922.474L8.7 11.634a.584.584 0 0 0 .245-.475V7.23l3.941-3.076.002-.002A2.918 2.918 0 0 0 14 1.861V.659a.98.98 0 0 0-.972-.972H.972ZM1.167.853h11.667v1.008c0 .536-.246 1.041-.667 1.374L8.003 6.483a.583.583 0 0 0-.225.46v3.916L6.222 11.97V6.944a.583.583 0 0 0-.225-.46l-4.163-3.25a1.748 1.748 0 0 1-.667-1.373V.853Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgFilterOutline);
