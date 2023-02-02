import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgShieldBlockOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.926.774a.467.467 0 0 0-.327.12S4.264 2.95 1.467 2.95A.467.467 0 0 0 1 3.418v3.814c0 2.078.961 5.496 5.73 7.505a.467.467 0 0 0 .362 0c4.769-2.009 5.73-5.427 5.73-7.505V3.418a.466.466 0 0 0-.467-.467C9.558 2.951 7.223.893 7.223.893a.467.467 0 0 0-.297-.12ZM6.911 1.84c.642.516 2.523 1.839 4.978 2.006v3.386c0 1.787-.687 4.669-4.978 6.554-4.291-1.885-4.978-4.767-4.978-6.554V3.846c2.455-.167 4.336-1.49 4.978-2.006Zm0 2.667A3.118 3.118 0 0 0 3.8 7.618a3.118 3.118 0 0 0 3.111 3.111 3.118 3.118 0 0 0 3.111-3.111 3.118 3.118 0 0 0-3.111-3.111Zm0 .933c.432 0 .81.156 1.148.37L5.103 8.766c-.214-.338-.37-.716-.37-1.148A2.17 2.17 0 0 1 6.911 5.44Zm1.808 1.03c.214.338.37.716.37 1.148A2.17 2.17 0 0 1 6.91 9.796c-.432 0-.81-.156-1.148-.37L8.72 6.47Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgShieldBlockOutline);
