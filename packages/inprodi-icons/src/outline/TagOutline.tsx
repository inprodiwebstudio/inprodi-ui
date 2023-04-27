import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgTagOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.274 1.632A2.282 2.282 0 0 0 0 3.906v6.647a2.282 2.282 0 0 0 2.274 2.274h5.799c.68 0 1.334-.265 1.823-.738h.001l3.466-3.35a2.108 2.108 0 0 0 0-3.02L9.898 2.37a2.624 2.624 0 0 0-1.824-.737H2.274Zm0 1.05h5.8c.408 0 .8.158 1.093.442l3.467 3.35a1.041 1.041 0 0 1 0 1.51l-3.467 3.35a1.578 1.578 0 0 1-1.094.444H2.274a1.217 1.217 0 0 1-1.224-1.225V3.906c0-.682.542-1.225 1.224-1.225Zm7.877 3.847a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgTagOutline);
