import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgNewspaperOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M3.5 1.174c-.822 0-1.5.677-1.5 1.5v1.833h-.5c-.823 0-1.5.677-1.5 1.5v5c0 1.19.976 2.167 2.167 2.167h9.666c1.191 0 2.167-.976 2.167-2.167V2.674c0-.823-.678-1.5-1.5-1.5h-9Zm0 1h9c.282 0 .5.217.5.5v8.333a1.16 1.16 0 0 1-1.167 1.167H2.167A1.16 1.16 0 0 1 1 11.007v-5c0-.282.218-.5.5-.5H2v5.167a.5.5 0 1 0 1 0V5.089a.5.5 0 0 0 0-.162V2.674c0-.283.218-.5.5-.5Zm1 2a.5.5 0 1 0 0 1h7a.5.5 0 1 0 0-1h-7Zm0 2.666a.5.5 0 1 0 0 1h2.667a.5.5 0 1 0 0-1H4.5Zm4.667 0a.5.5 0 1 0 0 1H11.5a.5.5 0 1 0 0-1H9.167ZM4.5 9.174a.5.5 0 1 0 0 1h2.667a.501.501 0 1 0 0-1H4.5Zm4.667 0a.5.5 0 1 0 0 1H11.5a.5.5 0 1 0 0-1H9.167Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgNewspaperOutline);
