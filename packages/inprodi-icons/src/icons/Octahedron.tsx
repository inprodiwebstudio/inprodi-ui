import * as React from "react";
import { SVGProps } from "react";
const SvgOctahedron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.35}
      d="M12 6c0 .372-.144.744-.426 1.026l-4.548 4.548a1.45 1.45 0 0 1-2.052 0L.426 7.026a1.45 1.45 0 0 1 0-2.052L4.974.426a1.45 1.45 0 0 1 2.052 0l4.548 4.548c.282.282.426.654.426 1.026Z"
      fill="#DEE2E6"
    />
    <path
      d="M3.594 6H0c0 .372.144.744.426 1.026l4.548 4.548A1.45 1.45 0 0 0 6 12L3.75 6.816A2.265 2.265 0 0 1 3.594 6ZM11.574 4.974 7.026.426A1.45 1.45 0 0 0 6 0L3.75 5.184c-.102.264-.156.54-.156.816H12a1.45 1.45 0 0 0-.426-1.026Z"
      fill="#DEE2E6"
    />
  </svg>
);
export default SvgOctahedron;
