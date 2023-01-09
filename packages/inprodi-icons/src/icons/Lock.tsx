import * as React from "react";
import { SVGProps } from "react";
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 0C5.46 0 4.2 1.26 4.2 2.8v1.4H2.975c-.864 0-1.575.711-1.575 1.575v6.65c0 .864.711 1.575 1.575 1.575h8.05c.864 0 1.575-.711 1.575-1.575v-6.65c0-.864-.711-1.575-1.575-1.575H9.8V2.8C9.8 1.26 8.54 0 7 0Zm0 1.05c.973 0 1.75.777 1.75 1.75v1.4h-3.5V2.8c0-.973.777-1.75 1.75-1.75Zm-4.025 4.2h8.05c.296 0 .525.229.525.525v6.65a.517.517 0 0 1-.525.525h-8.05a.517.517 0 0 1-.525-.525v-6.65c0-.296.229-.525.525-.525ZM7 8.05a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgLock;
