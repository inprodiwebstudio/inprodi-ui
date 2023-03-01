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
        d="M3.316.236c-.91 0-1.658.749-1.658 1.658v8.658h-.553a.553.553 0 0 0-.552.552v.737a2.403 2.403 0 0 0 2.394 2.395h8.106a2.403 2.403 0 0 0 2.394-2.395V1.894c0-.91-.748-1.658-1.657-1.658H3.316Zm0 1.105h8.474c.311 0 .552.24.552.553v9.947c0 .719-.57 1.29-1.29 1.29-.718 0-1.289-.572-1.289-1.29v-.737a.553.553 0 0 0-.552-.552H2.763V1.894c0-.312.24-.553.553-.553Zm1.473 1.842a.553.553 0 1 0 0 1.105.553.553 0 0 0 0-1.105Zm1.843 0a.553.553 0 1 0 0 1.105h3.684a.553.553 0 1 0 0-1.105H6.632Zm-1.843 2.21a.553.553 0 1 0 0 1.106.553.553 0 0 0 0-1.105Zm1.843 0a.553.553 0 1 0 0 1.106h3.684a.553.553 0 1 0 0-1.105H6.632ZM4.789 7.605a.553.553 0 1 0 0 1.105.553.553 0 0 0 0-1.105Zm1.843 0a.553.553 0 1 0 0 1.106h3.684a.553.553 0 1 0 0-1.106H6.632Zm-4.974 4.053h7v.184c0 .485.182.911.432 1.29H2.947c-.718 0-1.29-.572-1.29-1.29v-.184Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgFlipPaperOutline);
