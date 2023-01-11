import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgFilterSortOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M5.334.774a.552.552 0 0 0-.385.17L3.866 2.025 2.784.943a.552.552 0 1 0-.781.781l1.473 1.473a.552.552 0 0 0 .78 0L5.73 1.724a.552.552 0 0 0-.396-.95Zm4.048.008a.552.552 0 0 0-.383.161L7.526 2.416a.553.553 0 1 0 .781.781L9.39 2.115l1.082 1.082a.553.553 0 1 0 .781-.78L9.78.942a.552.552 0 0 0-.398-.161ZM.92 4.096a.929.929 0 0 0-.92.92v.401c0 .846.388 1.646 1.052 2.17l3.734 2.941v3.693a.552.552 0 0 0 .873.45l2.577-1.841a.552.552 0 0 0 .232-.45v-1.852l3.734-2.942a2.763 2.763 0 0 0 1.053-2.169v-.4a.929.929 0 0 0-.92-.921H.92ZM1.105 5.2H12.15v.217c0 .508-.232.987-.631 1.301l-3.682 2.9h-2.42l-3.682-2.9a1.655 1.655 0 0 1-.631-1.3V5.2Zm4.787 5.523h1.472v1.373l-1.472 1.052v-2.425Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgFilterSortOutline);
