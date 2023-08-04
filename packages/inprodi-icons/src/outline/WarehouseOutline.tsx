import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgWarehouseOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#WarehouseOutline_svg__a)">
        <path
          d="M6.928.174c-.423 0-.847.137-1.197.413L1.346 4.042A2.767 2.767 0 0 0 .292 6.214v6.67c0 .705.584 1.29 1.29 1.29h10.692c.706 0 1.29-.585 1.29-1.29v-6.67c0-.847-.389-1.648-1.054-2.172L8.125.587A1.931 1.931 0 0 0 6.928.174Zm0 1.103c.18 0 .361.06.513.179l4.385 3.455c.4.315.632.794.632 1.303v6.67a.176.176 0 0 1-.184.184h-.922v-2.761c0-.706-.584-1.29-1.29-1.29h-.553V6.62c0-.706-.585-1.29-1.29-1.29H5.637c-.706 0-1.29.584-1.29 1.29v2.396h-.554c-.706 0-1.29.585-1.29 1.29v2.762h-.922a.176.176 0 0 1-.184-.185v-6.67c0-.508.232-.988.632-1.303l4.385-3.454a.827.827 0 0 1 .513-.18Zm-1.29 5.158h2.58c.11 0 .185.076.185.185v2.396h-2.95V6.62c0-.109.076-.185.185-.185Zm-1.844 3.687h2.581v2.946H3.61v-2.761c0-.11.075-.185.184-.185Zm3.687 0h2.58c.11 0 .185.076.185.185v2.76H7.481v-2.945Z"
          fill={props.color || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="WarehouseOutline_svg__a">
          <path fill="#fff" transform="translate(0 .174)" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default IconHoc(SvgWarehouseOutline);
