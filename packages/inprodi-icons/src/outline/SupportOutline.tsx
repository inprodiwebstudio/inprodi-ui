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
        d="M6.94.78A5.676 5.676 0 0 0 1 6.44v3.833c0 .958.755 1.73 1.695 1.806.076 1.307 1.146 2.361 2.472 2.361h.338a.83.83 0 0 0 .662.334h1a.834.834 0 0 0 0-1.667h-1a.83.83 0 0 0-.662.333h-.338c-.776 0-1.382-.582-1.467-1.333h.8a.5.5 0 0 0 .5-.5V7.94a.5.5 0 0 0-.5-.5H2v-1A4.658 4.658 0 0 1 6.893 1.78c2.504.117 4.44 2.281 4.44 4.807v.854h-2.5a.5.5 0 0 0-.5.5v3.667a.5.5 0 0 0 .5.5H10.5a1.841 1.841 0 0 0 1.833-1.833V6.585c0-3.038-2.34-5.662-5.393-5.806ZM2 8.44h2v2.667H2.833A.826.826 0 0 1 2 10.274V8.44Zm7.333 0h2v1.834a.826.826 0 0 1-.833.833H9.333V8.44Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgSupportOutline);
