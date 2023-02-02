import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgFlipPaperOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M3.316.174c-.91 0-1.658.748-1.658 1.657v8.658h-.553a.553.553 0 0 0-.552.553v.737a2.403 2.403 0 0 0 2.394 2.395h8.106a2.403 2.403 0 0 0 2.394-2.395V1.83c0-.909-.748-1.657-1.657-1.657H3.316Zm0 1.105h8.473c.312 0 .553.24.553.552v9.948c0 .718-.57 1.29-1.29 1.29-.718 0-1.289-.572-1.289-1.29v-.737a.553.553 0 0 0-.552-.553H2.763V1.831c0-.311.24-.552.553-.552ZM4.789 3.12a.553.553 0 1 0 0 1.105.553.553 0 0 0 0-1.105Zm1.843 0a.553.553 0 1 0 0 1.105h3.684a.553.553 0 1 0 0-1.105H6.632ZM4.789 5.33a.553.553 0 1 0 0 1.106.553.553 0 0 0 0-1.106Zm1.843 0a.553.553 0 1 0 0 1.106h3.684a.553.553 0 1 0 0-1.106H6.632ZM4.789 7.542a.553.553 0 1 0 0 1.105.553.553 0 0 0 0-1.105Zm1.843 0a.553.553 0 1 0 0 1.105h3.684a.553.553 0 1 0 0-1.105H6.632Zm-4.974 4.053h7v.184c0 .484.182.911.432 1.29H2.947c-.718 0-1.29-.572-1.29-1.29v-.184Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgFlipPaperOutline);
