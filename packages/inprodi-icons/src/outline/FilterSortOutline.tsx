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
        d="M5.334.836a.552.552 0 0 0-.385.17L3.866 2.088 2.784 1.006a.552.552 0 1 0-.781.78L3.476 3.26a.552.552 0 0 0 .78 0L5.73 1.787a.552.552 0 0 0-.396-.95Zm4.048.008a.552.552 0 0 0-.383.162L7.526 2.479a.553.553 0 1 0 .781.78L9.39 2.178l1.083 1.083a.553.553 0 1 0 .78-.781L9.78 1.006a.552.552 0 0 0-.398-.162ZM.92 4.158a.929.929 0 0 0-.921.92v.402c0 .845.389 1.645 1.053 2.169l3.734 2.942v3.693a.552.552 0 0 0 .873.45l2.577-1.842a.552.552 0 0 0 .232-.45V10.59l3.734-2.941a2.763 2.763 0 0 0 1.053-2.17v-.4a.929.929 0 0 0-.92-.921H.92Zm.184 1.105H12.15v.217c0 .508-.232.986-.631 1.3L7.838 9.682h-2.42l-3.682-2.9a1.655 1.655 0 0 1-.631-1.301v-.217Zm4.786 5.523h1.473v1.373L5.891 13.21v-2.425Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgFilterSortOutline);
