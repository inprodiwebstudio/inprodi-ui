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
        d="M6.014.836c-.403 0-.805.13-1.137.393L.191 4.92a.501.501 0 0 0 .31.894h11.025a.501.501 0 0 0 .31-.894L7.151 1.229A1.835 1.835 0 0 0 6.014.836Zm0 1c.182 0 .364.06.517.18l3.55 2.797H1.946l3.55-2.797a.834.834 0 0 1 .518-.18Zm0 .972a.668.668 0 1 0 0 1.337.668.668 0 0 0 0-1.337ZM1.169 6.483v4.384C.501 11.02 0 11.617 0 12.33c0 .829.675 1.504 1.503 1.504h3.508V12.83H1.503a.5.5 0 1 1 0-1.002h3.508v-1.002h-.668V6.483H3.341v4.344h-1.17V6.483H1.17Zm4.344 0v2.553a1.13 1.13 0 0 1 .668-.214h.334V6.483H5.513Zm2.171 0v2.34h1.002v-2.34H7.684Zm2.172 0v2.34h1.002v-2.34H9.856ZM6.515 9.49a.843.843 0 0 0-.835.835v3.676c0 .455.38.835.835.835h6.013c.456 0 .836-.38.836-.835v-3.675a.843.843 0 0 0-.836-.836H6.515Zm.167 1.003h5.68v.668h-5.68v-.668Zm0 1.67h5.68v1.67h-5.68v-1.67Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgAccountsOutline);
