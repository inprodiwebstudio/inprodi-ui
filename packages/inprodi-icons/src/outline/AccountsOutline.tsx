import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgAccountsOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.014.774c-.403 0-.805.13-1.137.392L.19 4.858a.501.501 0 0 0 .31.895h11.025a.501.501 0 0 0 .31-.895L7.151 1.166A1.835 1.835 0 0 0 6.014.774Zm0 1c.182 0 .364.06.516.18l3.55 2.797H1.947l3.55-2.797a.834.834 0 0 1 .518-.18Zm0 .972a.668.668 0 1 0 0 1.337.668.668 0 0 0 0-1.337ZM1.169 6.421v4.384c-.668.153-1.17.75-1.17 1.463 0 .829.676 1.503 1.504 1.503h3.508V12.77H1.503a.5.5 0 1 1 0-1.002h3.508v-1.002h-.668V6.42H3.341v4.343H2.17V6.421H1.17Zm4.343 0v2.553a1.13 1.13 0 0 1 .669-.214h.334V6.42H5.512Zm2.172 0V8.76h1.002V6.42H7.684Zm2.172 0V8.76h1.002V6.42H9.856ZM6.515 9.428a.843.843 0 0 0-.836.835v3.675c0 .456.38.836.836.836h6.013c.456 0 .836-.38.836-.836v-3.675a.843.843 0 0 0-.836-.835H6.515Zm.167 1.002h5.68v.669h-5.68v-.669Zm0 1.67h5.68v1.671h-5.68v-1.67Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgAccountsOutline);
