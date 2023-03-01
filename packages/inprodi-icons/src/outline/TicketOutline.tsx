import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgTicketOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.651.835a.553.553 0 0 0-.546.552v11.237a1.105 1.105 0 1 0 0 2.21H12.895a1.105 1.105 0 1 0 0-2.21V1.387a.552.552 0 0 0-.86-.46l-1.367.912L9.126.913a.553.553 0 0 0-.568 0L7 1.848 5.442.913a.553.553 0 0 0-.568 0l-1.542.926L1.964.928a.553.553 0 0 0-.313-.093Zm3.507 1.197 1.558.934a.553.553 0 0 0 .568 0l1.558-.934 1.558.935a.553.553 0 0 0 .59-.015l.8-.532V13.729H2.21V2.42l.8.532a.553.553 0 0 0 .59.015l1.558-.935Zm-1.29 2.855a.553.553 0 1 0 0 1.106h6.263a.553.553 0 1 0 0-1.106H3.868Zm0 2.948a.553.553 0 1 0 0 1.105h3.316a.553.553 0 1 0 0-1.105H3.868Zm5.527 0a.553.553 0 1 0 0 1.105h.736a.553.553 0 1 0 0-1.105h-.736Zm-5.527 2.21a.553.553 0 1 0 0 1.105h2.58a.552.552 0 1 0 0-1.105h-2.58Zm5.527 0a.553.553 0 1 0 0 1.105h.736a.552.552 0 1 0 0-1.105h-.736Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgTicketOutline);
