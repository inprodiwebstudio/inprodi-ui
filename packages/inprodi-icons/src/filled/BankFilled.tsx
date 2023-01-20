import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBankFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.35}
        d="M12.95 11.515h-.35v-6.3h.148a1.252 1.252 0 0 0 .465-2.415L7.928.686a2.503 2.503 0 0 0-1.857 0L.786 2.8a1.253 1.253 0 0 0 .466 2.415H1.4v6.3h-.35a1.05 1.05 0 0 0 0 2.1h11.9a1.05 1.05 0 0 0 0-2.1Z"
        fill={props.color || `currentColor`}
      />
      <path
        d="M12.95 11.515c.123 0 .24.025.35.064V5.081a1.241 1.241 0 0 1-.552.134H11.2v6.3h1.75ZM9.8 11.515v-6.3H7.7v6.3h2.1ZM1.05 11.515H2.8v-6.3H1.252c-.2 0-.385-.051-.552-.134v6.498c.11-.039.227-.064.35-.064ZM6.3 11.515v-6.3H4.2v6.3h2.1ZM7 3.815a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgBankFilled);
