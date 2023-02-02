import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgKeyFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#KeyFilled_svg__a)" fill={props.color || `currentColor`}>
        <path
          opacity={0.35}
          d="M3.876 7.46a3.734 3.734 0 0 1-3.73-3.73A3.734 3.734 0 0 1 3.876 0a3.734 3.734 0 0 1 3.73 3.73c0 .66-.172 1.28-.474 1.819l-.28 1.157-1.158.281a3.71 3.71 0 0 1-1.818.473Zm0-5.425c-.934 0-1.695.76-1.695 1.695s.76 1.696 1.695 1.696 1.696-.761 1.696-1.696c0-.934-.761-1.695-1.696-1.695Z"
        />
        <path d="M13.412 13.266a1.023 1.023 0 0 1-.719.298c-.258 0-.522-.101-.719-.298l-6.28-6.28a3.755 3.755 0 0 0 1.438-1.438l6.28 6.28c.4.394.4 1.045 0 1.438Z" />
        <path
          opacity={0.35}
          d="m5.315 12.363.48.48a.677.677 0 0 0 .958 0l.48-.48a.677.677 0 0 1 .959 0L9.63 13.8a.677.677 0 0 0 .96 0l1.438-1.438-2.399-2.399-.479-.48-.959-.958-2.878 2.878a.68.68 0 0 0 .002.959Z"
        />
      </g>
      <defs>
        <clipPath id="KeyFilled_svg__a">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgKeyFilled);
