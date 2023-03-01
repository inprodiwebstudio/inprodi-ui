import * as React from "react";
import { SVGProps } from "react";
import IconHoc from "../IconHoc";
function SvgSignOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.557.934a1.625 1.625 0 0 0-1.331.87L5.889 10.18a.443.443 0 0 0-.05.205l.011 2.66a.442.442 0 0 0 .709.351l2.084-1.576a.442.442 0 0 0 .125-.15l3.774-7.289.487.252a.274.274 0 0 1 .12.379l-1.392 2.69a.442.442 0 1 0 .785.406l1.392-2.69a1.172 1.172 0 0 0-.499-1.57l-.487-.252.156-.301c.41-.79.097-1.776-.694-2.185a1.604 1.604 0 0 0-.853-.176Zm.164.879a.751.751 0 0 1 .283.082.73.73 0 0 1 .315.993l-4.29 8.287-1.298.982-.006-1.667 4.286-8.28a.734.734 0 0 1 .71-.397ZM3.142 5.007a2.461 2.461 0 0 0-.318.038c-.848.158-1.75.738-2.253 1.675C.196 7.421.03 8.037.04 8.573c.01.536.212.996.548 1.29.393.342.916.414 1.43.293-.07.563.031 1.066.347 1.417.253.28.642.433 1.033.392.118-.012.232-.069.348-.11.04.369.132.683.283.894.258.362.625.495.625.495a.442.442 0 1 0 .28-.84s-.076-.014-.186-.168-.24-.445-.11-1.093a.442.442 0 0 0-.746-.4c-.243.243-.452.329-.586.343-.134.014-.205-.018-.284-.105-.157-.175-.285-.717.104-1.496a.442.442 0 0 0-.708-.51c-.46.46-.98.455-1.248.221-.133-.116-.24-.304-.246-.64-.006-.334.104-.813.428-1.418.358-.669 1.078-1.12 1.635-1.223.279-.052.499-.014.608.05.109.064.167.126.167.375a.442.442 0 1 0 .884 0c0-.488-.239-.922-.603-1.136a1.46 1.46 0 0 0-.587-.19 1.92 1.92 0 0 0-.313-.007Z"
        fill={props.color || `currentColor`}
      />
    </svg>
  );
}
export default IconHoc(SvgSignOutline);
