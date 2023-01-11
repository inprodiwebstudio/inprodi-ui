import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgShieldCheckOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.926-.313a.467.467 0 0 0-.327.12S4.264 1.865 1.467 1.865A.467.467 0 0 0 1 2.33v3.814c0 2.078.961 5.497 5.73 7.505a.467.467 0 0 0 .362 0c4.769-2.008 5.73-5.427 5.73-7.505V2.331a.467.467 0 0 0-.467-.466c-2.797 0-5.132-2.058-5.132-2.058a.467.467 0 0 0-.297-.12ZM6.911.753c.642.516 2.523 1.839 4.978 2.006v3.386c0 1.787-.687 4.669-4.978 6.554-4.291-1.885-4.978-4.767-4.978-6.554V2.76C4.388 2.592 6.27 1.27 6.911.753ZM9.235 4.66a.467.467 0 0 0-.32.141L6.132 7.582 4.908 6.357a.467.467 0 1 0-.66.66l1.555 1.555a.467.467 0 0 0 .66 0l3.111-3.11a.467.467 0 0 0-.339-.802Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgShieldCheckOutline);
