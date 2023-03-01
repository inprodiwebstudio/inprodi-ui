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
        d="M7.197.842c-2.902.137-5.125 2.63-5.125 5.515v2.609L1.12 10.88a.431.431 0 0 0-.005.01c-.383.815.237 1.792 1.137 1.792h3.05c0 1.183.971 2.154 2.154 2.154 1.183 0 2.154-.97 2.154-2.154h3.05c.9 0 1.52-.977 1.137-1.791a.344.344 0 0 0-.005-.01l-.951-1.915V6.22A5.394 5.394 0 0 0 7.197.842Zm.05 1.076a4.298 4.298 0 0 1 4.517 4.302v2.872c0 .083.02.166.056.24l1.003 2.018c.064.138-.01.255-.163.255H2.252c-.153 0-.227-.117-.162-.255l1.002-2.018a.539.539 0 0 0 .057-.24V6.357c0-2.333 1.787-4.33 4.098-4.44ZM6.38 12.682h2.154c0 .601-.476 1.077-1.077 1.077a1.07 1.07 0 0 1-1.077-1.077Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgBellOutline);
