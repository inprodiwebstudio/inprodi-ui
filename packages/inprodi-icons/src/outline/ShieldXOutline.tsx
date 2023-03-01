import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgShieldXOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M6.926.836a.467.467 0 0 0-.327.12S4.264 3.014 1.467 3.014A.467.467 0 0 0 1 3.48v3.814c0 2.077.961 5.496 5.73 7.504a.467.467 0 0 0 .362 0c4.769-2.008 5.73-5.427 5.73-7.504V3.48a.467.467 0 0 0-.467-.467C9.558 3.014 7.223.956 7.223.956a.467.467 0 0 0-.297-.12Zm-.015 1.067c.642.516 2.523 1.838 4.978 2.005v3.387c0 1.786-.687 4.668-4.978 6.553-4.291-1.885-4.978-4.767-4.978-6.553V3.908c2.455-.167 4.336-1.49 4.978-2.005Zm2.018 3.282a.467.467 0 0 0-.326.143L6.911 7.021 5.219 5.328a.467.467 0 1 0-.66.66L6.25 7.68 4.56 9.373a.467.467 0 1 0 .66.66L6.91 8.34l1.692 1.693a.467.467 0 1 0 .66-.66L7.571 7.68l1.692-1.692a.467.467 0 0 0-.334-.803Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgShieldXOutline);
