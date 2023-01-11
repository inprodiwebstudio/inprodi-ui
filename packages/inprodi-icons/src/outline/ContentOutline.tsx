import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgContentOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M.92.774a.929.929 0 0 0-.92.92v1.841c0 .502.418.92.92.92h1.842c.502 0 .92-.418.92-.92v-1.84a.929.929 0 0 0-.92-.921H.92Zm.185 1.104h1.473v1.473H1.105V1.878Zm4.234.369a.553.553 0 1 0 0 1.104h8.1a.552.552 0 1 0 0-1.104h-8.1ZM.921 5.192a.929.929 0 0 0-.921.92v1.842c0 .502.418.92.92.92h1.842c.502 0 .92-.418.92-.92V6.113a.929.929 0 0 0-.92-.92H.92Zm.184 1.105h1.473V7.77H1.105V6.297Zm4.234.368a.552.552 0 1 0 0 1.105h8.1a.552.552 0 1 0 0-1.105h-8.1ZM.921 9.611a.929.929 0 0 0-.921.92v1.841c0 .502.418.92.92.92h1.842c.502 0 .92-.418.92-.92v-1.84a.929.929 0 0 0-.92-.921H.92Zm.184 1.104h1.473v1.473H1.105v-1.473Zm4.234.369a.553.553 0 1 0 0 1.104h8.1a.553.553 0 1 0 0-1.104h-8.1Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgContentOutline);
