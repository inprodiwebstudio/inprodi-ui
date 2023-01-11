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
        d="M0 12.029c0 .909.749 1.658 1.658 1.658h10.684c.91 0 1.658-.75 1.658-1.658v-1.842c0-.91-.749-1.658-1.658-1.658H1.658C.748 8.529 0 9.278 0 10.187v1.842Zm0-8.105C0 4.833.749 5.58 1.658 5.58h10.684c.91 0 1.658-.748 1.658-1.657V2.08c0-.909-.749-1.657-1.658-1.657H1.658C.748.424 0 1.172 0 2.08v1.843Zm1.105 8.105v-1.842c0-.312.241-.553.553-.553h10.684c.312 0 .553.24.553.553v1.842c0 .312-.241.553-.553.553H1.658a.544.544 0 0 1-.553-.553Zm0-8.105V2.08c0-.311.241-.552.553-.552h10.684c.312 0 .553.24.553.552v1.843c0 .311-.241.552-.553.552H1.658a.544.544 0 0 1-.553-.552Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgRowsOutline);
