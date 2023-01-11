import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgContractOutline(props: SVGProps<SVGSVGElement>) {
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
        d="M2.147.774A2.146 2.146 0 0 0 .01 2.91v8.856c-.103 1.42.579 2.938 2.057 2.992a.585.585 0 0 0 .08.005h9.716c.645 0 1.206-.366 1.57-.867.364-.5.567-1.149.567-1.854 0-.705-.203-1.353-.567-1.854-.364-.5-.925-.866-1.57-.866h-.195V2.91A2.146 2.146 0 0 0 9.531.774H2.147Zm0 1.165h7.384c.543 0 .971.429.971.972v6.412H2.147a.583.583 0 0 0-.076.004 1.9 1.9 0 0 0-.895.248V2.91c0-.543.428-.972.971-.972Zm1.166 1.166a.583.583 0 1 0 0 1.166h.777a.583.583 0 1 0 0-1.166h-.777Zm2.72 0a.583.583 0 1 0 0 1.166h2.332a.583.583 0 1 0 0-1.166H6.034Zm-2.72 1.943a.583.583 0 1 0 0 1.166h2.332a.583.583 0 1 0 0-1.166H3.313Zm4.275 0a.583.583 0 1 0 0 1.166h.777a.583.583 0 1 0 0-1.166h-.777ZM3.313 6.991a.583.583 0 1 0 0 1.166h2.332a.583.583 0 1 0 0-1.166H3.313ZM2.147 10.49c1.272 0 1.272 3.109 0 3.109-1.27 0-1.27-3.11 0-3.11Zm1.804 0h7.912c.212 0 .429.113.627.385.199.273.344.693.344 1.17 0 .475-.145.895-.344 1.168-.198.273-.415.386-.627.386H3.95c.467-.919.467-2.19 0-3.11Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgContractOutline);
