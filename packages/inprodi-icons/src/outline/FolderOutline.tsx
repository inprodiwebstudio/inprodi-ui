import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgFolderOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M1.575 1.6C.711 1.6 0 2.311 0 3.175v8.05c0 .864.711 1.575 1.575 1.575h10.85c.864 0 1.575-.711 1.575-1.575v-6.3c0-.864-.711-1.575-1.575-1.575h-5.41L5.45 2.046A1.925 1.925 0 0 0 4.218 1.6H1.575Zm0 1.05h2.643c.205 0 .403.072.56.203l1.227 1.022-1.227 1.022a.874.874 0 0 1-.56.203H1.05V3.175c0-.296.229-.525.525-.525Zm5.44 1.75h5.41c.296 0 .525.229.525.525v6.3a.517.517 0 0 1-.525.525H1.575a.517.517 0 0 1-.525-.525V6.15h3.168c.45 0 .886-.158 1.232-.446L7.015 4.4Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgFolderOutline);
