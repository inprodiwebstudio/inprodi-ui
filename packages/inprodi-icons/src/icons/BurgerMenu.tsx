import * as React from "react";
import { SVGProps } from "react";
const SvgBurgerMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.532 1.6a.524.524 0 1 0 0 1.049h12.936a.525.525 0 1 0 0-1.049H.532Zm0 4.72a.524.524 0 1 0 0 1.049h12.936a.525.525 0 1 0 0-1.049H.532Zm0 4.72a.526.526 0 0 0-.491.727.525.525 0 0 0 .49.322h12.937a.524.524 0 1 0 0-1.05H.532Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgBurgerMenu;
