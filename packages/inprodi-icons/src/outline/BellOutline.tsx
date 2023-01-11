import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgBellOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M7.197.78C4.295.916 2.072 3.41 2.072 6.295v2.609l-.952 1.914a.706.706 0 0 0-.005.01c-.383.814.237 1.792 1.137 1.792h3.05c0 1.183.971 2.154 2.154 2.154 1.183 0 2.154-.971 2.154-2.154h3.05c.9 0 1.52-.977 1.137-1.792l-.005-.01-.951-1.914V6.158A5.394 5.394 0 0 0 7.197.78Zm.05 1.075a4.298 4.298 0 0 1 4.517 4.303V9.03c0 .083.02.165.056.24l1.003 2.018c.064.138-.01.255-.163.255H2.252c-.153 0-.227-.117-.162-.255v-.001L3.092 9.27a.539.539 0 0 0 .057-.24V6.295c0-2.334 1.787-4.33 4.098-4.44ZM6.38 12.62h2.154a1.07 1.07 0 0 1-1.077 1.077A1.07 1.07 0 0 1 6.38 12.62Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgBellOutline);
