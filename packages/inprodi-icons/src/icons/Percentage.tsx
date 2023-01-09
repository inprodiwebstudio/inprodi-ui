import * as React from "react";
import { SVGProps } from "react";
const SvgPercentage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.833 1.6A1.841 1.841 0 0 0 0 3.433V11.1a1.84 1.84 0 0 0 1.833 1.833h10.334A1.84 1.84 0 0 0 14 11.1V3.433A1.84 1.84 0 0 0 12.167 1.6H1.833Zm0 1h10.334c.466 0 .833.367.833.833V11.1a.826.826 0 0 1-.833.833H1.833A.826.826 0 0 1 1 11.1V3.433c0-.466.367-.833.833-.833Zm7.324 1.996a.5.5 0 0 0-.344.15L4.48 9.08a.5.5 0 1 0 .707.707L9.52 5.454a.5.5 0 0 0-.363-.858Zm-3.99.004a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667Zm3.666 3.667a.833.833 0 1 0 0 1.666.833.833 0 0 0 0-1.666Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPercentage;
