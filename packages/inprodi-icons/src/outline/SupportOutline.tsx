import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgSupportOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.94.842A5.676 5.676 0 0 0 1 6.502v3.834c0 .957.755 1.73 1.695 1.805.076 1.308 1.146 2.362 2.472 2.362h.338a.83.83 0 0 0 .662.333h1a.834.834 0 0 0 0-1.667h-1a.83.83 0 0 0-.662.334h-.338c-.776 0-1.382-.583-1.467-1.334h.8a.5.5 0 0 0 .5-.5V8.003a.5.5 0 0 0-.5-.5H2v-1A4.658 4.658 0 0 1 6.893 1.84c2.504.118 4.44 2.282 4.44 4.807v.855h-2.5a.5.5 0 0 0-.5.5v3.666a.5.5 0 0 0 .5.5H10.5a1.841 1.841 0 0 0 1.833-1.833V6.648c0-3.038-2.34-5.662-5.393-5.806ZM2 8.502h2v2.667H2.833A.826.826 0 0 1 2 10.336V8.503Zm7.333 0h2v1.834a.826.826 0 0 1-.833.833H9.333V8.503Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgSupportOutline);
