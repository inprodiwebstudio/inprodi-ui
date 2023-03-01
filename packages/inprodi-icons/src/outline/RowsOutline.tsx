import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgRowsOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M0 12.116c0 .909.749 1.658 1.658 1.658h10.684c.91 0 1.658-.75 1.658-1.658v-1.842c0-.91-.749-1.658-1.658-1.658H1.658C.748 8.616 0 9.364 0 10.274v1.842ZM0 4.01c0 .91.749 1.658 1.658 1.658h10.684c.91 0 1.658-.749 1.658-1.658V2.168C14 1.26 13.251.51 12.342.51H1.658C.748.51 0 1.26 0 2.168V4.01Zm1.105 8.106v-1.842c0-.312.241-.553.553-.553h10.684c.312 0 .553.24.553.553v1.842c0 .312-.241.552-.553.552H1.658a.544.544 0 0 1-.553-.552Zm0-8.106V2.168c0-.312.241-.552.553-.552h10.684c.312 0 .553.24.553.552V4.01c0 .312-.241.553-.553.553H1.658a.544.544 0 0 1-.553-.553Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgRowsOutline);
