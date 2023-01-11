import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgColumnsOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.147.774a2.148 2.148 0 0 0-2.14 2.139v6.904a.584.584 0 0 0 0 .189v2.629c0 1.174.965 2.139 2.14 2.139h9.722a2.148 2.148 0 0 0 2.139-2.14v-2.626a.582.582 0 0 0 0-.189V2.913a2.148 2.148 0 0 0-2.14-2.14H2.148Zm0 1.166h4.277v3.111h-5.25V2.913c0-.544.429-.973.973-.973Zm5.444 0h4.278c.544 0 .972.429.972.973V5.05h-5.25v-3.11ZM1.174 6.218h5.25V9.33h-5.25V6.22Zm6.417 0h5.25V9.33h-5.25V6.22Zm-6.417 4.278h5.25v3.111H2.147a.964.964 0 0 1-.973-.972v-2.14Zm6.417 0h5.25v2.139a.964.964 0 0 1-.972.972H7.59v-3.111Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgColumnsOutline);
